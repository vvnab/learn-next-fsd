import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // useFileSystemPublicRoutes: false,
  // transpilePackages: ["@electric-sql/pglite"],
  serverExternalPackages: ["@electric-sql/pglite"],
};

export default nextConfig;
