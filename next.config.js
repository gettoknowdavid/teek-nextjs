module.exports = {
  experimental: { scrollRestoration: true },
  env: { NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API },
  images: { domains: ['localhost'] },
  reactStrictMode: true,
  webpack(config) {
    const newConfig = config;
    newConfig.externals = config.externals || {};
    newConfig.externals['styletron-server'] = 'styletron-server';
    return newConfig;
  },
};
