import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCompanyLogs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_company_logs';
  info: {
    displayName: 'companyLogs';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksFeatureCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_card_grids';
  info: {
    displayName: 'Feature Card Grid';
  };
  attributes: {
    FeatureCards: Schema.Attribute.Component<
      'shared.feature-highlights-card',
      true
    >;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section  Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksWhyChooseGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_choose_grids';
  info: {
    displayName: 'WhyChooseGrid';
  };
  attributes: {
    whyChoose: Schema.Attribute.Component<'shared.why-choose-card', true>;
  };
}

export interface BlocksWindowRangeGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_window_range_grids';
  info: {
    displayName: 'WindowRangeGrid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    head: Schema.Attribute.String;
    WindowRangeGrid: Schema.Attribute.Component<
      'shared.window-range-card',
      true
    >;
  };
}

export interface SharedFeatureHighlightsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_highlights_cards';
  info: {
    displayName: 'FeatureHighlightsCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedShoppingCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_shopping_cards';
  info: {
    displayName: 'ShoppingCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    subDescription: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface SharedWhyChooseCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_cards';
  info: {
    displayName: 'whyChooseCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SharedWindowRangeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_window_range_cards';
  info: {
    displayName: 'WindowRangeCard';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header: Schema.Attribute.String;
    textDescription: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.company-logs': BlocksCompanyLogs;
      'blocks.feature-card-grid': BlocksFeatureCardGrid;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.why-choose-grid': BlocksWhyChooseGrid;
      'blocks.window-range-grid': BlocksWindowRangeGrid;
      'shared.feature-highlights-card': SharedFeatureHighlightsCard;
      'shared.shopping-card': SharedShoppingCard;
      'shared.why-choose-card': SharedWhyChooseCard;
      'shared.window-range-card': SharedWindowRangeCard;
    }
  }
}
