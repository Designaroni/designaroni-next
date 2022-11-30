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
    G_TAG_MEASUREMENT_ID: process.env.G_TAG_MEASUREMENT_ID,
    NODE_ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
