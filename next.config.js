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
    removeConsole: isProd,
  },
  images: {
    domains: ['randomuser.me'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
