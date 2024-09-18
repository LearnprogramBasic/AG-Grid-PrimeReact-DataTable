import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	resources: {
		'es-CO': {
			translation: {
				exampleCaseOne: {
					createNew: 'Crear Nuevo',
				},
				exampleCaseTwo: {
					createDate: 'Crear Fecha',
				},
			},
		},
		'es-MX': {
			translation: {
				exampleCaseOne: {
					createNew: 'Crear Nuevo',
				},
				exampleCaseTwo: {
					createDate: 'Crear Fecha',
				},
			},
		},
	},
	lng: 'es-CO',
	fallbackLng: 'es-CO',
	interpolation: {
		escapeValue: false,
	},
});
export default i18n;