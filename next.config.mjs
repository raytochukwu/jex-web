/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   'i.kinja-img.com',
    //   'cdn.vox-cdn.com',
    //   'cdn.example.com',
    //   'media.wired.com',
    //   'newsapi.org',
    //   'readwrite.com',
    //   'cdn.arstechnica.net',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains
      },
    ],
  },
}

export default nextConfig
