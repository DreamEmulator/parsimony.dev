
export type ContentBlock = {
  BLOCK_TYPE: Contentblock;
  title?: string;
  subtitle?: string;
  body?: string;
  url?: string;
  src?: string;
  item: (string | null)[];
  order?: number;
  highlight?: boolean;
  link?: string;
  SIZE?: Sizes;
};

export type ContentGroup = {
  id: string;
  GROUP_TYPE: CONTENTGROUPS;
  order: number;
  LOCALE?: Locales | keyof typeof Locales;
  contentBlocks: (ContentBlock | null)[];
  pageID?: string;
  PAGE: Pages | keyof typeof Pages;
  createdAt?: string;
  updatedAt?: string;
};

export enum CONTENTGROUPS {
  CTA_CARDS = "CTA_CARDS",
  SQUARE_IMAGES = "SQUARE_IMAGES",
  STEPS = "STEPS",
}

export enum LOCALES {
  EN = "EN",
  NL = "NL",
}

export enum CONTENTBLOCK {
  CTA_CARD = "CTA_CARD",
  SQUARE_IMAGE = "SQUARE_IMAGE",
  STEP = "STEP",
}

export enum SIZES {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum PAGES {
  HOME = "HOME",
  SKILLS = "SKILLS",
  SERVICES = "SERVICES",
  TESTIMONIALS = "TESTIMONIALS",
}

export enum Contents {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  CARD = "CARD",
}

export enum Texts {
  TITLE = "TITLE",
  PARAGRAPH = "PARAGRAPH",
  DEFINITION = "DEFINITION",
}
