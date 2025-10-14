import type { Schema, Struct } from '@strapi/strapi';

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
      'blocks.feature-card-grid': BlocksFeatureCardGrid;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.window-range-grid': BlocksWindowRangeGrid;
      'shared.feature-highlights-card': SharedFeatureHighlightsCard;
      'shared.window-range-card': SharedWindowRangeCard;
    }
  }
}
