/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
        {
            protocol : "https",
            hostname : "images.pexel.com",
        },
        //you can add more
    ],
        
    },
};

export default nextConfig;
