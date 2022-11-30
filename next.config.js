/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_CONFIG_IMAGES_DOMAIN}`],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
