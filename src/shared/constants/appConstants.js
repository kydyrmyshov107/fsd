// platformItems
export const platformData = (t) => [
  {
    id: 1,
    value: t("mainPage.Platform.toPercentage1"),
    description: t("mainPage.Platform.platformInvestmens"),
  },
  {
    id: 2,
    value: t("mainPage.Platform.toPercentage2"),
    description: t("mainPage.Platform.increasedIncome"),
  },
  {
    id: 3,
    value: t("mainPage.Platform.toPercentage3"),
    description: t("mainPage.Platform.expertEgreements"),
  },
];
//

// Routes
export const HOME = "/";
export const NEWS = "/news";
export const EXPERTS = "/experts";
export const CONTACTS = "/contacts";
export const PROJECTS = "/projects";
export const INVESTORS = "/investors";
export const NOT_FOUND = "*";

// Footer data
export const footerData = {
  wordsPlatworm: [
    { id: 1, path: PROJECTS },
    { id: 2, path: INVESTORS },
    { id: 3, path: EXPERTS },
  ],

  wordsOpportunities: [
    { id: 1, path: NOT_FOUND },
    { id: 2, path: NOT_FOUND },
  ],

  wordsContacts: [
    { id: 1, text: "+996 (777) 77 77 77", path: "tel:+996507111669" },
    { id: 2, text: "+996 (777) 77 77 76", path: "tel:+996507111669" },
  ],
};

//
