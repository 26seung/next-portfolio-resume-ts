/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
      "www.notion.so",
      "localhost:3000",
      "next-portfolio-resume-ts.vercel.app",
    ],
  },
};

module.exports = nextConfig;
