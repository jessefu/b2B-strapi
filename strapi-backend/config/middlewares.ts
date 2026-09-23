import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  // 1. 注意：这里删除了原来简写的 'strapi::security'，保留下面带配置的版本
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'", 
            'data:', 
            'blob:', 
            'market-assets.strapi.io', 
            'resources.buywewant.com', // 👈 必须加上你绑定的 R2 自定义域名
            '*.r2.dev'                  // 👈 允许所有 r2.dev 域名
          ],
          'media-src': [
            "'self'", 
            'data:', 
            'blob:', 
            'market-assets.strapi.io', 
            'resources.buywewant.com', // 👈 必须加上你绑定的 R2 自定义域名
            '*.r2.dev'                  // 👈 允许所有 r2.dev 域名
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;