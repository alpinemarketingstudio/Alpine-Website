import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationIT from "./locales/it/translation.json";

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  it: { translation: translationIT },
};

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next) // pass i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
