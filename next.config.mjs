/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  async redirects() {
    return [
      // Legacy .html and old URL redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact-1',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-1.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/index_mobile.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
