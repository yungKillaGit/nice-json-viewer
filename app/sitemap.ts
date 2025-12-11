import type { MetadataRoute } from 'next';
import { baseURL } from '~/shared/config/env-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
  ];
}
