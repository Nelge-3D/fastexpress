import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.fastexpress.ga'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/business`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
