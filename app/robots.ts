import type { MetadataRoute } from 'next';
import { baseURL } from '~/shared/config/env-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/sitemap.xml'],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
