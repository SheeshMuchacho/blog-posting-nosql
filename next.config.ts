import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enables the minimal production server output we’ll run in Docker
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "acumenintelligence.com",
        pathname: "/wp-content/**",
      },
    ],
    // domains: ["acumenintelligence.com"],
  },
};

export default nextConfig;
