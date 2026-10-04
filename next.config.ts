import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Bound static-export workers on hosts that expose more CPUs than build memory.
  experimental: { cpus: 2 },
};

export default nextConfig;
