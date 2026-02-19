import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';

// Detect browser language, fallback to 'cs'
const browserLang = navigator.language?.split('-')[0];
const defaultLang = ['cs', 'en'].includes(browserLang) ? browserLang : 'cs';
const savedLanguage = localStorage.getItem('language') || defaultLang;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: cs },
      en: { translation: en },
    },
    lng: savedLanguage,
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
