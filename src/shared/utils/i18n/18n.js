import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../../../../public/locales/en/translation.json";
import ru from "../../../../public/locales/ru/translation.json";
import ky from "../../../../public/locales/ky/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallback: "en",
    lng: "ru",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ky: { translation: ky },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
