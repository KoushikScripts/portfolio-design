/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  basePath: '',
  assetPrefix: '',
  // Disable server-side features for static export
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
