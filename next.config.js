/** @format */
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // assetPrefix: '.',
  // // output: 'export',
  images: {
    unoptimized: true,
  },
});
