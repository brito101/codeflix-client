import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: ["m.media-amazon.com", "codeflix-api.vercel.app"].map(
      (hostname) => ({
        protocol: "https",
        hostname,
        port: "",
        pathname: "/**",
        search: "",
      })
    ),
  },
};

export default nextConfig;
