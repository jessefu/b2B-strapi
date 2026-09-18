import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          // 在下面这行里加入你的 R2 域名
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'pub-49bd4c71ca7f4c9dba57d9211d7b8e81.r2.dev'],
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'pub-49bd4c71ca7f4c9dba57d9211d7b8e81.r2.dev'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

export default config;
