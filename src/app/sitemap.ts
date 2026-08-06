import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { casos } from '@/lib/casos'
import { posts } from '@/lib/blog'

// Sitemap generado en build. Incluye todas las rutas públicas indexables.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/sobre-mi`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/casos`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/blog`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/contacto`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/webinar`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/recursos/automatizaciones-pymes`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/diagnostico`, priority: 0.8, changeFrequency: 'monthly' },
  ]

  const casoRoutes: MetadataRoute.Sitemap = casos.map(c => ({
    url: `${SITE_URL}/casos/${c.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  const postRoutes: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.fecha,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...casoRoutes, ...postRoutes]
}
