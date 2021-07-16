import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_us from "./translations/en-us/common.json";
import hr_hr from "./translations/hr-hr/common.json";

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
            common: en_us
        },
        hr: {
            common: hr_hr
        },
    },
  });

export default i18n;