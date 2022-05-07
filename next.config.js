/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com"],
  },
  plugins: [["styled-components", { ssr: true }]],
};

module.exports = nextConfig;
