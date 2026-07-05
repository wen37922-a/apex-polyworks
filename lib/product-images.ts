import { list } from "@vercel/blob";
import { cache } from "react";

export type ProductImageLibrary = {
  ABS: { hero: string; gallery: string[] };
  UHMWPE: { hero: string; gallery: string[] };
  POLYCARBONATE: { hero: string; applications: string; properties: string; machining: string; forms: string; cta: string };
  POLYPROPYLENE: { hero: string; overview: string; sheet: string; rod: string; machining: string; applications: string; cta: string };
  NYLON: { hero: string; forms: string; machining: string; applications: string; properties: string; cta: string; gallery: string };
  PEEK: { hero: string; sheet: string[]; rod: string[]; cnc: string[] };
  ACRYLIC: { hero: string; sheet: string[]; display: string[] };
};

export const productImages: ProductImageLibrary = {
  ABS: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244798349-abs-1-05ctFZEyBvhPrs5GQD1Pr4aACwlHLZ.webp",
    gallery: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244798349-abs-1-05ctFZEyBvhPrs5GQD1Pr4aACwlHLZ.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244803316-abs-2-ZoHIQyRj2VZeZH5JQcFFHudaD52Xcg.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244810768-abs-3-W8SRS62Ol6zMKqx8Y5zQinIuvuKtUA.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244819135-abs-4-MaDWjkW20lhCBXOy7FAc3IrKRIkl2C.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244832110-abs-6-XrzzbN69YUHtWFTf3ixiotZonTMYfz.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244841184-abs-7-QpPGUiAc7SnPTWXaM9rtk8vmwmaznt.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244857687-abs-8-HTVlncWv4PS7DtQviNyso4aCSIMXu0.webp"
    ]
  },
  UHMWPE: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249399417-uhmwpe1-QJ7hPPOH9XEV92B76y6rL6zfKIbDjF.jpg",
    gallery: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249399417-uhmwpe1-QJ7hPPOH9XEV92B76y6rL6zfKIbDjF.jpg",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249407999-uhmwpe2-96okOVg8ABbqOhApQdXXIiAsTqPw7y.jpg",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249419703-uhmwpe3-6rv2R3W4Rwqhu0MO1LluedxU9GkQ5g.jpg",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249426863-uhmwpe4-2nHvtyih7wkhsrnf90ZZoZxL21sCxC.jpg",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249435185-uhmwpe5-UIVVhRwMCX8fZFxD52fk3tWM6hqeI1.jpg",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783249442118-uhmwpe6-voOfdV3t5Uf1zz3gCBRtpuCaN0dykU.jpg"
    ]
  },
  POLYCARBONATE: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253309811-pc-01-9M38WhxTQC9x7iPLqeI3BkHuiRZ9Ra.webp",
    applications: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253317317-pc-02-jGwSeX5kDEmKpUJfqxwy8NR79TbGJ6.webp",
    properties: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253322674-pc-03-bXniGeEy6ZtoyIXh8OgyrDuBW5W80y.webp",
    machining: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253328473-pc-04-B87sBdTAUTUzJI10hKPX6MLEUa8Tar.webp",
    forms: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253334000-pc-05-lNx6LsJrM7EyGFqOF4vGYpNSNKqqtp.webp",
    cta: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253339642-pc-06-3ejmaMFWCy1iT16wdq0RSf55GWNVgq.webp"
  },
  POLYPROPYLENE: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253532077-pp-01-8mBxvRoQ9mfyQhIQESU62j7I9efs8P.webp",
    overview: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253537261-pp-02-0p3XDuFgxvNS0hzmAIueXFLE5ICGzO.webp",
    sheet: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253541816-pp-03-5mZUyHC9zX5ME75c68I60xPMaLh5US.webp",
    rod: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253546621-pp-04-S7kcW0PU2sk6Y7kCnA8ZUUVRy1yqrN.webp",
    machining: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253552046-pp-05-CutnhXVGhRgkcjldwpt0nlwVd5OwMs.webp",
    applications: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253556037-pp-06-z2KhWu1BPWH20RO2QlGMqujEBIL63w.webp",
    cta: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783253560888-pp-07-kjYfaZSkLVIV2DJ3osLLNW7KqZBI4I.webp"
  },
  NYLON: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254604865-NL1-43sQ2bROsjcOufyrDBGazBYAoW6CMA.png",
    forms: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254734088-NL2-HWf3sGnCOaDZUrA6lMpDSfK8RDhRZi.png",
    machining: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254636340-NL3-ziKgRMWIUIDNW3M4nlfU6rOTpQWu3j.png",
    applications: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254749962-NL4-qaPEDCI3CgVq4qaZKSkKaClwEcmske.png",
    properties: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254759981-NL5-RP46E4fvkWuc1G5u5JzjOZOxSezicC.png",
    cta: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254781907-NL6-3RewOXVnYyvrvvvW2gG5RBTfkwJTPV.png",
    gallery: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783254788710-NILONG3-Dnjy6GbnHiPkaIEI4yGfcQILKdhz0a.jpg"
  },
  PEEK: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134584794-peek-hero1-bAHaI9sBsvIbVEUrE3AnDA9YeM3bPP.webp",
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
    ]
  },
  ACRYLIC: {
    hero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310282530-acrylic-gradient-cube-display-1200x1200-95WjUTO2WWMBP7rYRQCpSUeuoKVk5i.webp",
    sheet: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1783244622932-acrylic-ykl1-colored-sheet-fan-white-bg-3eYyLHKB0hc8p82YiycTOwnHhntFCL.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310308684-acrylic-sheet-sample-board-1200x1200-QhwXrfWHnftFj4c4fIDey7HDf6ss6a.webp"
    ],
    display: [
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310298749-acrylic-red-lit-display-shelf-1200x1200-3ncBDSMqEYDJGuiDzqA6SBhHI9Qw8R.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310289323-acrylic-orange-display-stand-1200x1200-ob302bkRrEX9UAZe5WkXMnwZHyWfNJ.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310303685-acrylic-round-table-1200x1200-mGYtBSqF7CIrxL1C7e3ng1HGfYjG5O.webp",
      "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310269764-acrylic-curved-counter-panel-1600x1200-S3YwFdHl1WYWtq6p558BS1eOfYp0i0.webp"
    ]
  }
};

export const siteImages = {
  warehouse: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
  secondaryHero: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134591199-peek-hero2-9gA9kx8TxOtwLPvMivYEyGhFHOHAlD.webp"
};

function cloneLibrary(): ProductImageLibrary {
  return {
    ABS: { hero: productImages.ABS.hero, gallery: [...productImages.ABS.gallery] },
    UHMWPE: { hero: productImages.UHMWPE.hero, gallery: [...productImages.UHMWPE.gallery] },
    POLYCARBONATE: { ...productImages.POLYCARBONATE },
    POLYPROPYLENE: { ...productImages.POLYPROPYLENE },
    NYLON: { ...productImages.NYLON },
    PEEK: {
      hero: productImages.PEEK.hero,
      sheet: [...productImages.PEEK.sheet],
      rod: [...productImages.PEEK.rod],
      cnc: [...productImages.PEEK.cnc]
    },
    ACRYLIC: {
      hero: productImages.ACRYLIC.hero,
      sheet: [...productImages.ACRYLIC.sheet],
      display: [...productImages.ACRYLIC.display]
    }
  };
}

function addUnique(target: string[], url: string) {
  if (!target.includes(url)) target.unshift(url);
}

function classifyBlob(library: ProductImageLibrary, pathname: string, url: string) {
  const name = decodeURIComponent(pathname).toLowerCase();

  if (name.includes("abs-")) {
    addUnique(library.ABS.gallery, url);
    if (!library.ABS.hero || /abs-1(?:\D|$)/.test(name)) library.ABS.hero = url;
    return;
  }

  if (name.includes("uhmwpe")) {
    addUnique(library.UHMWPE.gallery, url);
    if (!library.UHMWPE.hero || /uhmwpe-?1(?:\D|$)/.test(name)) library.UHMWPE.hero = url;
    return;
  }

  if (/\/[^/]*pc-0[1-6](?:\D|$)/.test(name)) {
    if (name.includes("pc-01")) library.POLYCARBONATE.hero = url;
    else if (name.includes("pc-02")) library.POLYCARBONATE.applications = url;
    else if (name.includes("pc-03")) library.POLYCARBONATE.properties = url;
    else if (name.includes("pc-04")) library.POLYCARBONATE.machining = url;
    else if (name.includes("pc-05")) library.POLYCARBONATE.forms = url;
    else if (name.includes("pc-06")) library.POLYCARBONATE.cta = url;
    return;
  }

  if (name.includes("peek")) {
    if (name.includes("cnc") || name.includes("图")) addUnique(library.PEEK.cnc, url);
    else if (name.includes("rod")) addUnique(library.PEEK.rod, url);
    else if (name.includes("hero1")) library.PEEK.hero = url;
    else if (name.includes("sheet")) addUnique(library.PEEK.sheet, url);
    return;
  }

  if (name.includes("acrylic") || name.includes("pmma")) {
    if (name.includes("gradient") && name.includes("cube")) library.ACRYLIC.hero = url;
    else if (name.includes("sheet") || name.includes("ykl")) addUnique(library.ACRYLIC.sheet, url);
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

export function selectProductImages(images: string[], fileStems: string[]) {
  return fileStems
    .map((stem) => images.find((url) => decodeURIComponent(url).toLowerCase().includes(`-${stem.toLowerCase()}-`)))
    .filter((url): url is string => Boolean(url));
}
