import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://universus.cards/cards/**')],
  },
};

export default nextConfig;
