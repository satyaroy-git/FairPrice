/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production domain
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://getfairprice.com',
  },
  // Image optimization domains (if needed in future)
  images: {
    domains: ['getfairprice.com'],
  },
}

module.exports = nextConfig
