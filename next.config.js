/** Constants */
const isProd = process.env.NODE_ENV == 'production';

/**
 * Next.js config
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  compress: isProd,
  swcMinify: isProd,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
