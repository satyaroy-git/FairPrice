/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production domain
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://getfairprice.in',
  },
  // Image optimization domains (if needed in future)
  images: {
    domains: ['getfairprice.in'],
  },
}

module.exports = nextConfig
