export type MaterialImageRole =
  | "hero"
  | "sheet"
  | "rod"
  | "cnc"
  | "warehouse"
  | "applications"
  | "cta"
  | "gallery";

export type MaterialImages = Record<MaterialImageRole, string[]>;

export type MaterialForm = {
  title: string;
  description: string;
  imageRole: "sheet" | "rod" | "cnc" | "gallery";
};

export type Material = {
  slug: string;
  name: string;
  shortName: string;
  aliases: string[];
  catalogOrder: number;
  showInCatalog: boolean;
  eyebrow: string;
  description: string;
  cardDescription: string;
  cardApplications: string;
  tags: Array<"CNC" | "Sheet" | "Rod">;
  keyProperties: string[];
  forms: MaterialForm[];
  cncDescription: string;
  applications: string[];
  images: MaterialImages;
  seoTitle: string;
  seoDescription: string;
};
