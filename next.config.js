/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Enable Cloudflare deployment with OpenNext
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", ".eetcg.com"],
    },
  },
};

export default nextConfig;
