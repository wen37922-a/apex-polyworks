/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.apexpolyworks.com"
          }
        ],
        destination: "https://apexpolyworks.com/:path*",
        statusCode: 301
      },
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
