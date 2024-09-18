import { TaxRowData } from '../props.type';

export const getPinnedBottomRowData = (rowData: TaxRowData[]): TaxRowData[] => {
	const totalValorImp = rowData.reduce((acc, curr) => acc + (curr.valorImp || 0), 0);
	const totalBase = rowData.reduce((acc, curr) => acc + (curr.base || 0), 0);
	const totalValorTotalImp = rowData.reduce((acc, curr) => acc + (curr.valorTotalImp || 0), 0);

	return [
		{
			tipo: 'Agregar impuesto', // Esta fila seguirá mostrando el botón "Agregar impuesto"
			impuesto: '',
			tarifa: '',
			valorImp: 0,
			base: 0,
			valorTotalImp: 0,
			trash: '',
		},
		{
			tipo: 'Total', // Esta fila mostrará los totales calculados
			impuesto: '',
			tarifa: '',
			valorImp: totalValorImp,
			base: totalBase,
			valorTotalImp: totalValorTotalImp,
			trash: '',
		},
	];
};
