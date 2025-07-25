import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://randomuser.me/api/portraits/**')]
    },
    experimental: {
        viewTransition: true,
    },
    output: "standalone",
};

export default nextConfig;
