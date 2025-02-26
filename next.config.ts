import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-hot-toast'],
  },
  poweredByHeader: false,
};

export default nextConfig;
