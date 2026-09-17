import Link from "next/link";

export function Logo() {
  return <Link className="logo" href="/" aria-label="SolvePilot home"><span className="logo-mark">➤</span><span>Solve<span>Pilot</span></span></Link>;
}
