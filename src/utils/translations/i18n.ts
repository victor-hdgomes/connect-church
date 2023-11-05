import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from '@/utils/translations/pt.json'
import es from '@/utils/translations/es.json'
import en from '@/utils/translations/en.json'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'pt',
    resources: {
        pt: pt,
        en: en,
        es: es,
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;