/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.builder.io"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
