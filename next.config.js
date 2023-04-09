/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    minimumCacheTTL: 60,
    domains: [
      "cdn.myanimelist.net",
      "lh3.googleusercontent.com",
      "img.youtube.com",
    ],
  },

  async redirects() {
    return [
      {
        source: "/category",
        destination: `/category/include=&exclude=&page=1`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
