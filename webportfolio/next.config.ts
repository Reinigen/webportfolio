import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static exports
  basePath: '/webportfolio', // Replace with your repository name
  assetPrefix: '/webportfolio/', // Replace with your repository name and include the trailing slash
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

export default nextConfig;

