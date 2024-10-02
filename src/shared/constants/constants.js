// Routes
export const appRoutes = {
  home: "/",
  news: "/news",
  experts: "/experts",
  contacts: "/contacts",
  projects: "/projects",
  investors: "/investors",
  not_found: "*",
};

//

export const getWords = (t) => {
  const words = [
    { text: t("header.investors"), path: appRoutes.investors, id: 1 },
    { text: t("header.innovators"), path: appRoutes.projects, id: 2 },
    { text: t("header.experts"), path: appRoutes.experts, id: 3 },
    { text: t("header.contacts"), path: appRoutes.contacts, id: 4 },
    { text: t("header.news"), path: appRoutes.news, id: 5 },
  ];

  return words;
};
