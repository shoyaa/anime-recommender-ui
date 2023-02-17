/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["cdn.myanimelist.net", "lh3.googleusercontent.com"],
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
