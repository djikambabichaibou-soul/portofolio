/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true, // For static export or manual handling if needed
    },
};

export default nextConfig;
