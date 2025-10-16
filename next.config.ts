import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
};

export default nextConfig;
