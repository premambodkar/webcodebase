/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true, // Helps catch issues in development
  swcMinify: true,        // Enables faster minification using SWC
}

module.exports = nextConfig
