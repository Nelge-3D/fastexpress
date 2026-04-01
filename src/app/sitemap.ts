import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.fastexpress.ga',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Si tu as d'autres pages comme /services ou /contact, ajoute-les ici :
    /*
    {
      url: 'https://www.fastexpress.ga/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}