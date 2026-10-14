import type { NextConfig } from "next";

// Static export: `next build` writes the whole site to out/ (served by
// Cloudflare Workers Static Assets, see docs/hosting.md). Legacy WordPress
// redirects live in public/_redirects.
const nextConfig: NextConfig = {
  output: "export",
  // No image optimizer without a server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
