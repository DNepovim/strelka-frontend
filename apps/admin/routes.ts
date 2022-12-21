export const createRoute =
  (funct: ((param?: string) => string) | string) =>
  (param?: string) =>
  (section: string) =>
    `/${section}/${typeof funct === "string" ? funct : funct(param)}`

export interface Route {
  title: (param?: string) => string
  route: (param?: string) => (section: string) => string
}

export const routes = {
  pages: {
    list: {
      title: () => "Stránky",
      route: createRoute(() => "stranky"),
    },
    edit: {
      title: (title: string) => `Upravit ${title}`,
      route: createRoute((slug) => `stranky/${slug}`),
    },
    create: {
      title: () => `Vytvořit stránku`,
      route: createRoute(() => `stranky/vytvorit`),
    },
  },
  sections: {
    list: {
      title: () => "Sekce",
      route: createRoute("sekce"),
    },
    edit: {
      title: (title: string) => `Upravit ${title}`,
      route: createRoute((slug) => `sekce/${slug}`),
    },
    create: {
      title: () => `Vytvořit stránku`,
      route: createRoute(() => `sekce/vytvorit`),
    },
  },
  users: {
    list: {
      title: () => "Uživatelé",
      route: createRoute("uzivatele"),
    },
    edit: {
      title: (title: string) => `Upravit uživatele ${title}`,
      route: createRoute((slug) => `uzivatele/${slug}`),
    },
    create: {
      title: () => `Přidat uživatele`,
      route: createRoute(() => `uzivatele/pridat`),
    },
  },
  events: {
    list: {
      title: () => "Události",
      route: createRoute("udalosti"),
    },
    edit: {
      title: (title: string) => `Upravit událost ${title}`,
      route: createRoute((slug) => `udalosti/${slug}`),
    },
    create: {
      title: () => `Přidat událost`,
      route: createRoute(() => `udalosti/pridat`),
    },
  },
}
