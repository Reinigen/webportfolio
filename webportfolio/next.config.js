// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  // Added a production vs deployed view to make it easier to edit and keep changes consistent
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/webportfolio' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webportfolio/' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
