export type SEOImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type SEOContentLink = {
  title: string;
  description: string;
  href: string;
};

export type SEOContentCard = {
  title: string;
  description: string;
  href?: string;
  image?: SEOImage;
};

export type SEOFaqItem = {
  question: string;
  answer: string;
};

export type SixToEightItems<T> =
  | [T, T, T, T, T, T]
  | [T, T, T, T, T, T, T]
  | [T, T, T, T, T, T, T, T];

export const materialPropertyKeys = [
  "temperatureResistance",
  "chemicalResistance",
  "mechanicalStrength",
  "wearResistance",
  "electricalProperties"
] as const;

export type MaterialPropertyKey = (typeof materialPropertyKeys)[number];

export const materialFormKeys = [
  "sheet",
  "rod",
  "tube",
  "customMachinedParts"
] as const;

export type MaterialFormKey = (typeof materialFormKeys)[number];

export const materialApplicationKeys = [
  "semiconductor",
  "medical",
  "automation",
  "electronics",
  "foodProcessing",
  "aerospace"
] as const;

export type MaterialApplicationKey = (typeof materialApplicationKeys)[number];

export type SEOQuoteCta = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type MaterialSEOPageData = {
  materialName: string;
  slug: string;
  eyebrow?: string;
  heroTitle?: string;
  introduction: string;
  primaryApplications: string[];
  heroImage?: SEOImage;
  overview: {
    whatIs: string;
    keyCharacteristics: string[];
    typicalIndustries: string[];
    image?: SEOImage;
  };
  propertyLabels?: Partial<Record<MaterialPropertyKey, string>>;
  formLabels?: Partial<Record<MaterialFormKey, string>>;
  properties: Record<MaterialPropertyKey, string>;
  grades?: SEOContentCard[];
  availableForms: Record<MaterialFormKey, Omit<SEOContentCard, "title">>;
  applications: Record<MaterialApplicationKey, Omit<SEOContentCard, "title">>;
  machiningCapability: {
    description: string;
    capabilities: string[];
    image?: SEOImage;
  };
  supplierAdvantages?: SEOContentCard[];
  midPageCta?: SEOQuoteCta;
  faqs: SixToEightItems<SEOFaqItem>;
  relatedLinks: SEOContentLink[];
  quoteCta?: SEOQuoteCta;
};

export type ProductSEOPageData = {
  productName: string;
  slug: string;
  eyebrow?: string;
  heroTitle: string;
  introduction: string;
  heroHighlights: string[];
  heroImage: SEOImage;
  overview: {
    whatIs: string;
    selectionReasons: string[];
    image?: SEOImage;
  };
  sectionCopy?: {
    overviewTitle?: string;
    overviewReasonsTitle?: string;
    supplyOptionsEyebrow?: string;
    supplyOptionsTitle?: string;
    supplyOptionsDescription?: string;
    propertiesEyebrow?: string;
    propertiesTitle?: string;
    propertiesDescription?: string;
    applicationsEyebrow?: string;
    applicationsTitle?: string;
    applicationsDescription?: string;
    machiningEyebrow?: string;
    machiningTitle?: string;
    machiningLinkLabel?: string;
    relatedEyebrow?: string;
    relatedTitle?: string;
    faqTitle?: string;
    faqDescription?: string;
  };
  manufacturingSupport?: {
    title: string;
    description: string;
    capabilities: string[];
    image?: SEOImage;
    href?: string;
    hrefLabel?: string;
  };
  supplyOptions: SEOContentCard[];
  properties: SEOContentCard[];
  applications: SEOContentCard[];
  machiningCapability?: {
    description: string;
    capabilities: string[];
    image?: SEOImage;
    href: string;
  };
  supplierAdvantages?: {
    title: string;
    description: string;
    items: SEOContentCard[];
  };
  relatedLinks: SEOContentLink[];
  faqs: SixToEightItems<SEOFaqItem>;
  quoteCta?: SEOQuoteCta;
};

export type ApplicationSEOPageData = {
  industryName: string;
  slug: string;
  eyebrow?: string;
  heroTitle?: string;
  introduction: string;
  heroImage?: SEOImage;
  challenges: SEOContentCard[];
  recommendedMaterials: SEOContentLink[];
  commonComponents: SEOContentCard[];
  materialAdvantages: SEOContentCard[];
  machiningSupport: {
    description: string;
    capabilities: string[];
    image?: SEOImage;
  };
  faqs: SixToEightItems<SEOFaqItem>;
  relatedLinks: SEOContentLink[];
  quoteCta?: SEOQuoteCta;
};

export type TechnicalArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: SEOImage;
};

export type TechnicalComparisonTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: Array<{
    label: string;
    values: string[];
  }>;
};

export type TechnicalArticleData = {
  slug: string;
  title: string;
  introduction: string;
  category: string;
  readTime?: string;
  authorName?: string;
  datePublished: string;
  dateModified?: string;
  heroImage?: SEOImage;
  sections: TechnicalArticleSection[];
  comparisonTables?: TechnicalComparisonTable[];
  faqs?: SEOFaqItem[];
  relatedProducts: SEOContentLink[];
  quoteCta?: SEOQuoteCta;
};
