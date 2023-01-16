/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig : nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acmeinc.com',
        port: '',
      },
    ],
  },
}
