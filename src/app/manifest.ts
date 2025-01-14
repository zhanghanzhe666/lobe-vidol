import { kebabCase } from 'lodash-es';
import type { MetadataRoute } from 'next';

import { BRANDING_LOGO_URL, BRANDING_NAME } from '@/constants/branding';
import { manifestModule } from '@/server/manifest';

import pkg from '../../package.json';

const manifest = async (): Promise<MetadataRoute.Manifest | any> => {
  return manifestModule.generate({
    description: pkg.description,
    icons: [
      {
        purpose: 'any',
        sizes: '192x192',
        url: '/icons/icon-192x192.png',
      },
      {
        purpose: 'maskable',
        sizes: '192x192',
        url: '/icons/icon-192x192.maskable.png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        url: '/icons/icon-512x512.png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        url: '/icons/icon-512x512.maskable.png',
      },
    ],
    id: kebabCase(BRANDING_NAME),
    name: BRANDING_NAME,
    screenshots: BRANDING_LOGO_URL
      ? []
      : [
          {
            form_factor: 'narrow',
            url: '/screenshots/shot-1.mobile.png',
          },
          {
            form_factor: 'wide',
            url: '/screenshots/shot-1.desktop.png',
          },
        ],
  });
};

export default manifest;
