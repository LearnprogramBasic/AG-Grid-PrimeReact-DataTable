import { TaxRowData } from '../props.type';

export const rowData: TaxRowData[] = [
	// {
	// 	tipo: 'IVA',
	// 	impuesto: 'IVA 19%',
	// 	tarifa: '19%',
	// 	valorImp: 0,
	// 	base: 0,
	// 	valorTotalImp: 0,
	// 	trash: '',
	// },
	// {
	// 	tipo: 'Impoconsumo',
	// 	impuesto: 'Impoconsumo 8%',
	// 	tarifa: '8%',
	// 	valorImp: 0,
	// 	base: 0,
	// 	valorTotalImp: 0,
	// 	trash: '',
	// },
	// {
	// 	tipo: 'Retención',
	// 	impuesto: 'Retefuente 11%',
	// 	tarifa: '11%',
	// 	valorImp: 0,
	// 	base: 0,
	// 	valorTotalImp: 0,
	// 	trash: '',
	// },
	// {
	// 	tipo: 'Ad-valorem',
	// 	impuesto: 'Ad-valorem 25%',
	// 	tarifa: '25%',
	// 	valorImp: 0,
	// 	base: 0,
	// 	valorTotalImp: 0,
	// 	trash: '',
	// },
];

export const tipoOptions = [
	{ label: 'IVA', value: 'IVA' },
	{ label: 'Retención', value: 'Retención' },
	{ label: 'Impoconsumo', value: 'Impoconsumo' },
	{ label: 'Ad-valorem', value: 'Ad-valorem' },
];

export const impuestoOptions = {
	IVA: [
		{ label: 'IVA 19%', value: 'IVA 19%' },
		{ label: 'IVA 5%', value: 'IVA 5%' },
		{ label: 'IVA 0%', value: 'IVA 0%' },
	],
	Retención: [
		{ label: 'Retefuente 11%', value: 'Retefuente 11%' },
		{ label: 'Retefuente 10%', value: 'Retefuente 10%' },
		{ label: 'Retefuente 7%', value: 'Retefuente 7%' },
	],
	Impoconsumo: [
		{ label: 'Impoconsumo 8%', value: 'Impoconsumo 8%' },
		{ label: 'Impoconsumo por valor', value: 'Impoconsumo por valor' },
	],
	Advalorem: [
		{ label: 'Ad-valorem 25%', value: 'Ad-valorem 25%' },
		{ label: 'Ad-valorem 20%', value: 'Ad-valorem 20%' },
	],
};
