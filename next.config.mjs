/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/engineering-plastics-stock-shapes",
        has: [
          {
            type: "host",
            value: "www.apexpolyworks.com"
          }
        ],
        destination: "https://apexpolyworks.com/products/stock-shapes",
        statusCode: 301
      },
      {
        source: "/products/engineering-plastics-stock-shapes",
        destination: "/products/stock-shapes",
        statusCode: 301
      },
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
        source: "/services/cut-to-size-plastic-sheets",
        destination: "/services/cut-to-size-plastic",
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
