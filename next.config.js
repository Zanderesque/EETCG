/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
