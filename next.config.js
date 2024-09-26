/** @format */

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  assetPrefix: '.',
  output: 'export',
  images: {
    unoptimized: true,
  },
  extends: {
    fontFamily: {
      body: ['exo 2'],
      heading: ['space grotesk'],
    },
  },
  theme: {
    container: {
      margin: '6rem',
    },
  },
};
