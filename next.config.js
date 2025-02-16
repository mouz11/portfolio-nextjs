/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig 