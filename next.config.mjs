/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  experimental_ppr: true,
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
