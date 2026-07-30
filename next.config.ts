import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'norteia.es' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
  async redirects() {
    return [
      // Arquitectura antigua → nueva (301). No eliminar: conservan el SEO
      // y los enlaces ya publicados.
      { source: '/conoceme', destination: '/sobre-mi', permanent: true },
      { source: '/sobre', destination: '/sobre-mi', permanent: true },
      { source: '/consultoria', destination: '/contacto', permanent: true },
      { source: '/servicios/eu-ai-act', destination: '/blog/eu-ai-act-pymes', permanent: true },
      { source: '/servicios/:path*', destination: '/', permanent: true },
      { source: '/servicios', destination: '/', permanent: true },
      { source: '/demo/:path*', destination: '/', permanent: true },
      { source: '/demo', destination: '/', permanent: true },
    ]
  },
};

const withMDX = createMDX({})

export default withMDX(nextConfig);
