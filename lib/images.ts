import { list } from "@vercel/blob";
import { cache } from "react";

export type ProductImageLibrary = {
  ABS: { sheet: string[]; rod: string[]; cnc: string[] };
  PEEK: { sheet: string[]; rod: string[]; cnc: string[]; warehouse: string[]; hero: string[] };
  ACRYLIC: { sheet: string[]; display: string[] };
};

export const productImages: ProductImageLibrary = {
  ABS: {
    sheet: [],
    rod: [],
    cnc: []
  },
  PEEK: {
    sheet: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134683304-peek-sheet-4-WqAf6XEcfIWq45uAg3Pg2DA9ffnojb.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134654887-peek-sheet-3-pcMOr4FbUGq6WQ6ZtFiCa5SKtMUktT.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134669577-peek-sheet-2-UPAhf4gpr557LSvihX9sZ2d7eQ1rJQ.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134697332-peek-sheet-5-vDSHVTBo4hYJSLmqClmou0cQ8WKLwV.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134704720-peek-sheet-6-aZlNYbzKqeJ5MQvv4o5eQdQqmheNku.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134712937-peek-sheet-7-RnucSKet1WoVoXeD8xFqFDvS1wVbfr.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134721456-peek-sheet-8-4zdf3WpBJ9wZBpbqlMVYXBf4fNeL7V.webp"
    ],
    rod: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134600318-peek-rod-1-0UJzW7RMBl7XOlyKOm3tEO6TgwGzrU.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134605963-peek-rod-2-sfOEzAPNwhBOxaB9THtphEeQT8QtTv.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134612579-peek-rod-3-OM1NQs4ciiZfLIROtEkqifGcZ68EIU.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134620767-peek-rod-4-k00hKpOtEZscx8edQpKhFPEfg8N8Tf.webp"
    ],
    cnc: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134507708-peek-cnc%E5%9B%BE1-Pyau8a8ctGrTZGK56cMHYPmmNUcZkK.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134520033-peek-cnc%E5%9B%BE2-pOGRYOEvQjuysSzVXbwUCb4nja5wKA.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134533843-peek-cnc%E5%9B%BE3-xKzrkB27J9mnmwy46lW2jaKrC8JS60.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134539239-peek-cnc%E5%9B%BE4-KgyoVQeDflchuKrcKsmOsx1YSiC59f.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134544516-peek-cnc%E5%9B%BE5-r0FcLiF4dfAdiV3DAuBZGmejsq72Lx.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134561731-peek-cnc%E5%9B%BE6-uJ9Ba3nQHSe9cMUYbppmWOHfaqGJSk.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134571749-peek-cnc%E5%9B%BE7-xR5UUCtJAT5PAh8FecTuBRp1MfrGmR.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134577091-peek-cnc%E5%9B%BE8-Oru9Qesn6iDzPGU9d3TFe5vl9rplfK.webp"
    ],
    warehouse: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp"
    ],
    hero: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134584794-peek-hero1-bAHaI9sBsvIbVEUrE3AnDA9YeM3bPP.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134591199-peek-hero2-9gA9kx8TxOtwLPvMivYEyGhFHOHAlD.webp"
    ]
  },
  ACRYLIC: {
    sheet: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244622932-acrylic-ykl1-colored-sheet-fan-white-bg-3eYyLHKB0hc8p82YiycTOwnHhntFCL.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310308684-acrylic-sheet-sample-board-1200x1200-QhwXrfWHnftFj4c4fIDey7HDf6ss6a.webp"
    ],
    display: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310282530-acrylic-gradient-cube-display-1200x1200-95WjUTO2WWMBP7rYRQCpSUeuoKVk5i.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310298749-acrylic-red-lit-display-shelf-1200x1200-3ncBDSMqEYDJGuiDzqA6SBhHI9Qw8R.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310289323-acrylic-orange-display-stand-1200x1200-ob302bkRrEX9UAZe5WkXMnwZHyWfNJ.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310303685-acrylic-round-table-1200x1200-mGYtBSqF7CIrxL1C7e3ng1HGfYjG5O.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310269764-acrylic-curved-counter-panel-1600x1200-S3YwFdHl1WYWtq6p558BS1eOfYp0i0.webp"
    ]
  }
};

function cloneLibrary(): ProductImageLibrary {
  return {
    ABS: { sheet: [...productImages.ABS.sheet], rod: [...productImages.ABS.rod], cnc: [...productImages.ABS.cnc] },
    PEEK: {
      sheet: [...productImages.PEEK.sheet],
      rod: [...productImages.PEEK.rod],
      cnc: [...productImages.PEEK.cnc],
      warehouse: [...productImages.PEEK.warehouse],
      hero: [...productImages.PEEK.hero]
    },
    ACRYLIC: { sheet: [...productImages.ACRYLIC.sheet], display: [...productImages.ACRYLIC.display] }
  };
}

function addUnique(target: string[], url: string) {
  if (!target.includes(url)) target.unshift(url);
}

function classifyBlob(library: ProductImageLibrary, pathname: string, url: string) {
  const name = decodeURIComponent(pathname).toLowerCase();

  if (name.includes("abs-")) {
    if (/abs-(7|8)(?:\D|$)/.test(name) || name.includes("cnc") || name.includes("machin")) addUnique(library.ABS.cnc, url);
    else if (name.includes("rod")) addUnique(library.ABS.rod, url);
    else addUnique(library.ABS.sheet, url);
    return;
  }

  if (name.includes("peek")) {
    if (name.includes("warehouse") || name.includes("inventory")) addUnique(library.PEEK.warehouse, url);
    else if (name.includes("cnc") || name.includes("图")) addUnique(library.PEEK.cnc, url);
    else if (name.includes("rod")) addUnique(library.PEEK.rod, url);
    else if (name.includes("hero")) addUnique(library.PEEK.hero, url);
    else if (name.includes("sheet")) addUnique(library.PEEK.sheet, url);
    return;
  }

  if (name.includes("acrylic") || name.includes("pmma")) {
    if (name.includes("sheet") || name.includes("ykl")) addUnique(library.ACRYLIC.sheet, url);
    else addUnique(library.ACRYLIC.display, url);
  }
}

export const getProductImages = cache(async (): Promise<ProductImageLibrary> => {
  const library = cloneLibrary();
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) return library;

  try {
    const result = await list({ prefix: "admin-images/", limit: 1000, token });
    result.blobs.forEach((blob) => classifyBlob(library, blob.pathname, blob.url));
  } catch (error) {
    console.error("Unable to refresh the product image library from Vercel Blob.", error);
  }

  return library;
});

export function firstImage(images: string[], fallback: string) {
  return images[0] || fallback;
}
