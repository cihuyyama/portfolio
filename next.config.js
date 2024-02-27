/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'out',
  distDir: 'build',
};

module.exports = nextConfig
