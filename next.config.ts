import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/saadan-virker-JournalKlar",
        destination: "/saadan-virker-journalklar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
