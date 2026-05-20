/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "litindia.ac.in",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "three", "@react-three/drei"],
    turbopack: {
      root: ".",
    },
  },
};

module.exports = nextConfig;