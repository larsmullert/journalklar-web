import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.journalklar.dk" }],
        destination: "https://journalklar.dk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
