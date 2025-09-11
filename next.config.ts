// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enables the minimal production server output we’ll run in Docker
  output: 'standalone',
};

export default nextConfig;
