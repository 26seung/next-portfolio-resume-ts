/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
      "www.notion.so",
    ],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;
