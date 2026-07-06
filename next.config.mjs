/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/materials/uhmwpe-sheet",
        destination: "/materials/uhmwpe",
        permanent: true
      }
    ];
  },
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
