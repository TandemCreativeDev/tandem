import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    // Removing optimizeCss until we install critters
    optimizePackageImports: ['react-hot-toast'],
  },
  poweredByHeader: false,
};

export default bundleAnalyzer(nextConfig);
