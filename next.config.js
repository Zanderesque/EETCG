/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for serverless deployment
  output: "standalone",

  // Optimize for Cloudflare Pages
  poweredByHeader: false,

  // Add any additional configuration needed for your project
  reactStrictMode: true,
};

module.exports = nextConfig;
