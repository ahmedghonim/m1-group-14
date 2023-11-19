import "server-only";

const dictionaries: any = {
  en: () =>
    import("@/app/dictionaries/en.json").then((module) => module.default),
  ar: () =>
    import("@/app/dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) => dictionaries[locale]();
