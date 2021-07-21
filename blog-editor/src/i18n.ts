import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./translations/en/common.json";
import hr from "./translations/hr/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            common: en
        },
        hr: {
            common: hr
        },
    },
  });

export default i18n;