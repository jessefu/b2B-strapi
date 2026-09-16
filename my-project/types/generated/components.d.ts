import type { Schema, Struct } from '@strapi/strapi';

export interface HeroBannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTALink: Schema.Attribute.String;
    CTAText: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
  };
}

export interface SeoSettingsSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_settings_seo';
  info: {
    displayName: 'SEO \u8BBE\u7F6E';
    icon: 'archive';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'seo-settings.seo': SeoSettingsSeo;
    }
  }
}
