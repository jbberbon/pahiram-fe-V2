/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        taint: true,
        ppr: true,
    },
    logging: {
        fetches: {
            fullUrl: true,
        }
    }
};

export default nextConfig;
