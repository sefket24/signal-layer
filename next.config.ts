import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/signal-layer',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
