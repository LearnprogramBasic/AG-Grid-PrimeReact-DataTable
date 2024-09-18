import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esES from '@assets/i18n/es-ES.json';
import esCO from '@assets/i18n/es-CO.json';

const LANG = import.meta.env.VITE_LANG || 'es-ES';

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: import.meta.env.MODE === 'development',
		fallbackLng: LANG,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			'es-ES': {
				translation: esES,
			},
			'es-CO': {
				translation: esCO,
			},
		},
	});

export default i18n;
