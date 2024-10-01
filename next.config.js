/** @format */
/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // assetPrefix: '.',
  // // output: 'export',
  images: {
    unoptimized: true,
  },
};
