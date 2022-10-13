import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_es from "../assets/translations/es.json";
import translation_en from "../assets/translations/en.json";
import LANGUAGES from "../utils/LANGUAGES";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translation_es
      },
      en: {
        translation: translation_en
      }
    },
    lng: localStorage.getItem('lang') || LANGUAGES.ES,
    fallbackLng: LANGUAGES.ES,

    interpolation: {
      escapeValue: false
    }
});
