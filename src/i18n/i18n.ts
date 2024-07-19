import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';

export const resources = {
    en: {
        translations: en
    }
};

export const defaultNS = 'translations';

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    ns: [defaultNS],
    resources,
    defaultNS,

    interpolation: {
        escapeValue: false
    }
});

export type Locales = 'en';

export default i18n;
