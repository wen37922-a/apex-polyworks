/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gzsev9bufcsq0twb.public.blob.vercel-storage.com",
        pathname: "/admin-images/**"
      }
    ]
  }
};

export default nextConfig;
