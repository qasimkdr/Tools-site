"""Read-only production diagnostics; a crawler user-agent is not a verified crawler IP."""
import concurrent.futures
import json
import re
import urllib.request
import xml.etree.ElementTree as ET

BASE = 'https://solvepilot.xyz'

def fetch(path, agent='SolvePilot-Sitemap-Check/1.0'):
    request = urllib.request.Request(BASE + path, headers={'User-Agent': agent})
    with urllib.request.urlopen(request, timeout=30) as response:
        return {'status': response.status, 'url': response.url,
                'contentType': response.headers.get('Content-Type'),
                'body': response.read()}

if __name__ == '__main__':
    paths = ['/sitemap.xml', '/robots.txt', '/contact/', '/privacy/', '/cookies/', '/terms/']
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        results = dict(zip(paths, pool.map(fetch, paths)))
    root = ET.fromstring(results['/sitemap.xml']['body'])
    namespace = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = [node.text for node in root.findall('s:url/s:loc', namespace)]
    assert root.tag == '{http://www.sitemaps.org/schemas/sitemap/0.9}urlset'
    assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
    assert len(urls) <= 50000 and len(results['/sitemap.xml']['body']) < 50 * 1024 * 1024
    assert all(url.startswith(BASE + '/') for url in urls), 'Unexpected sitemap host'
    robots = results['/robots.txt']['body'].decode()
    assert 'Sitemap: ' + BASE + '/sitemap.xml' in robots
    assert not re.search(r'^Disallow: /\s*$', robots, re.M), 'Whole-site robots block'
    canonical = {}
    for path in paths[2:]:
        html = results[path]['body'].decode()
        match = re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', html)
        canonical[path] = {'actual': match.group(1) if match else None,
                           'matches': bool(match and match.group(1) == BASE + path)}
    google = fetch('/sitemap.xml', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')
    assert google['body'] == results['/sitemap.xml']['body'], 'Different XML for Googlebot user-agent'
    report = {'sitemapStatus': results['/sitemap.xml']['status'], 'sitemapContentType': results['/sitemap.xml']['contentType'],
              'uniqueUrls': len(urls), 'xmlBytes': len(results['/sitemap.xml']['body']),
              'robotsStatus': results['/robots.txt']['status'], 'googlebotUserAgentStatus': google['status'],
              'canonicals': canonical,
              'limitation': 'Does not reproduce actual Googlebot IP access or historical Search Console fetch logs.'}
    print(json.dumps(report, indent=2))
    assert all(item['matches'] for item in canonical.values()), 'Production still has a canonical mismatch; check deployment state'
