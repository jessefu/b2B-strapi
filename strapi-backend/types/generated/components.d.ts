import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAnnouncementBar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_announcement_bars';
  info: {
    displayName: 'Announcement Bar';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['dark', 'primary', 'accent']
    >;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    message: Schema.Attribute.String;
  };
}

export interface BlocksBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blocks';
  info: {
    displayName: 'Blocks';
  };
  attributes: {
    Hero: Schema.Attribute.Component<'blocks.hero', true>;
  };
}

export interface BlocksCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_blocks_case_studies';
  info: {
    displayName: 'Case Studies';
  };
  attributes: {
    cases: Schema.Attribute.Component<'shared.case-study-item', true>;
    layoutStyle: Schema.Attribute.Enumeration<['grid', 'slider', 'featured']>;
    sectionTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksContactForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    sectionTitle: Schema.Attribute.String;
    submitButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    successMessage: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.faq-item', true>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
  };
}

export interface BlocksGlobalOffices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_global_offices';
  info: {
    displayName: 'Global Offices';
  };
  attributes: {
    offices: Schema.Attribute.Component<'shared.office-item', true>;
    sectionTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaButtonText: Schema.Attribute.String;
    ctaButtonUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksIconList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icon_lists';
  info: {
    displayName: 'Icon List';
  };
  attributes: {
    sectionTitle: Schema.Attribute.Component<'shared.icon-item', true>;
  };
}

export interface BlocksImageWithText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_with_texts';
  info: {
    displayName: 'Image With Text';
  };
  attributes: {
    content: Schema.Attribute.Text;
    ctaButtonText: Schema.Attribute.String;
    ctaButtonUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface BlocksLogoWall extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logo_walls';
  info: {
    displayName: 'Logo Wall';
  };
  attributes: {
    logos: Schema.Attribute.Component<'shared.logo-item', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksProductGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_product_grids';
  info: {
    displayName: 'Product Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    layoutStyle: Schema.Attribute.Enumeration<['grid', 'carousel']>;
    maxItems: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<8>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksRecentPosts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_recent_posts';
  info: {
    displayName: 'Recent Posts';
  };
  attributes: {
    displayMode: Schema.Attribute.Enumeration<['grid', 'list']>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    postsCount: Schema.Attribute.Integer;
    sectionTitle: Schema.Attribute.String;
    sourceType: Schema.Attribute.Enumeration<['latest', 'manual', 'category']>;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksResourceDownload extends Struct.ComponentSchema {
  collectionName: 'components_blocks_resource_downloads';
  info: {
    displayName: 'Resource Download';
  };
  attributes: {
    resources: Schema.Attribute.Component<'shared.resource-item', true>;
    sectionTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    layoutStyle: Schema.Attribute.Enumeration<['grid', 'carousel']>;
    members: Schema.Attribute.Component<'shared.team-member-item', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    sectionTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'shared.testimonial-item', true>;
  };
}

export interface BlocksTrustBadges extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trust_badges';
  info: {
    displayName: 'Trust Badges';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.trust-badge-item', true>;
    layout: Schema.Attribute.Enumeration<['grid', 'slider']>;
    sectionTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<
      ['video-left', 'video-right', 'stack-top', 'stack-bottom']
    >;
    videoUrl: Schema.Attribute.String;
  };
}

export interface SeoMetaSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_seo_metas';
  info: {
    displayName: 'SeoMeta';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_case_study_items';
  info: {
    displayName: 'Case Study Item';
  };
  attributes: {
    clientLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    clientName: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    industry: Schema.Attribute.String;
    metrics: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.nav-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_items';
  info: {
    displayName: 'Icon Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_items';
  info: {
    displayName: 'Logo Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedNavDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_dropdown_items';
  info: {
    displayName: 'Nav Dropdown Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    linkType: Schema.Attribute.Enumeration<
      ['page', 'product-category', 'post-category', 'post', 'custom']
    >;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    post: Schema.Attribute.Relation<'oneToOne', 'api::post.post'>;
    post_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::postcategory.postcategory'
    >;
    product_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::productcategory.productcategory'
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'NavItem';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.nav-dropdown-item', true>;
    label: Schema.Attribute.String;
    linkType: Schema.Attribute.Enumeration<
      ['page', 'product-category', 'post-category', 'post', 'custom']
    >;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    post: Schema.Attribute.Relation<'oneToOne', 'api::post.post'>;
    post_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::postcategory.postcategory'
    >;
    product_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::productcategory.productcategory'
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedOfficeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_office_items';
  info: {
    displayName: 'Office Item';
  };
  attributes: {
    address: Schema.Attribute.Text;
    cityOrRegion: Schema.Attribute.String;
    country: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    isHeadquarter: Schema.Attribute.Boolean;
    phone: Schema.Attribute.String;
    timezone: Schema.Attribute.String;
  };
}

export interface SharedResourceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_items';
  info: {
    displayName: 'Resource Item';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    downloadFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    requiresLead: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_spec_items';
  info: {
    displayName: 'Spec Item';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedTeamMemberItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_member_items';
  info: {
    displayName: 'Team Member Item';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer;
  };
}

export interface SharedTrustBadgeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_trust_badge_items';
  info: {
    displayName: 'Trust Badge Item';
  };
  attributes: {
    badgeIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    verifyUrl: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.announcement-bar': BlocksAnnouncementBar;
      'blocks.blocks': BlocksBlocks;
      'blocks.case-studies': BlocksCaseStudies;
      'blocks.contact-form': BlocksContactForm;
      'blocks.faq': BlocksFaq;
      'blocks.global-offices': BlocksGlobalOffices;
      'blocks.hero': BlocksHero;
      'blocks.icon-list': BlocksIconList;
      'blocks.image-with-text': BlocksImageWithText;
      'blocks.logo-wall': BlocksLogoWall;
      'blocks.product-grid': BlocksProductGrid;
      'blocks.recent-posts': BlocksRecentPosts;
      'blocks.resource-download': BlocksResourceDownload;
      'blocks.rich-text': BlocksRichText;
      'blocks.team': BlocksTeam;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.trust-badges': BlocksTrustBadges;
      'blocks.video': BlocksVideo;
      'seo-meta.seo-meta': SeoMetaSeoMeta;
      'shared.case-study-item': SharedCaseStudyItem;
      'shared.faq-item': SharedFaqItem;
      'shared.footer-column': SharedFooterColumn;
      'shared.icon-item': SharedIconItem;
      'shared.logo-item': SharedLogoItem;
      'shared.nav-dropdown-item': SharedNavDropdownItem;
      'shared.nav-item': SharedNavItem;
      'shared.office-item': SharedOfficeItem;
      'shared.resource-item': SharedResourceItem;
      'shared.spec-item': SharedSpecItem;
      'shared.team-member-item': SharedTeamMemberItem;
      'shared.testimonial-item': SharedTestimonialItem;
      'shared.trust-badge-item': SharedTrustBadgeItem;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
