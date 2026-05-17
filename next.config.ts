import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGhPages ? "/Supriya_Mohanty" : "",
  assetPrefix: isGhPages ? "/Supriya_Mohanty/" : "",
};

export default nextConfig;
