/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/keybraker.github.io/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
