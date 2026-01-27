// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  output: 'export', // Enables static exports
  basePath: '/webportfolio', // Replace with your repository name
  assetPrefix: '/webportfolio/', // Replace with your repository name and include the trailing slash
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;
