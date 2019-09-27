import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
  en: { "translation": en},
  es: { "translation": es}
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  }
);

export default i18n;