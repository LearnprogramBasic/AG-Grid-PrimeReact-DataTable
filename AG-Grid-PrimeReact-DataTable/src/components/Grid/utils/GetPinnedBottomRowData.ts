import { RowData } from '../MockData/rowData';

export const getPinnedBottomRowData = (rowDataLength: number): RowData[] => [
	{
		n: rowDataLength + 1,
		item: 'Agregar ítem',
		descripcion: '',
		cantidad: 0,
		valorUnitario: 0,
		descuento: '',
		impuestos: 0,
		bodega: '',
		vendedor: '',
		tercero: '',
		obsequio: false,
		totalNeto: 0,
		actions: '',
		trash: '',
		statusModeBadge: '', // Si es necesario para tu lógica
	},
];
