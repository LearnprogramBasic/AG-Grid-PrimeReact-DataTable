export interface Price {
	label: string;
	price: string;
}

export interface RowData {
	n?: number;
	item: string;
	descripcion: string;
	cantidad: number;
	valorUnitario: number;
	descuento: string;
	impuestos: number;
	bodega: string;
	vendedor: string;
	tercero: string;
	obsequio: boolean;
	totalNeto: number;
	actions: string;
	trash: string;
	statusModeBadge: string;
	prices: Price[]; // Asegúrate de incluir esta propiedad
}

export const rowData: RowData[] = [
	{
		item: 'Producto genérico con un nombre mayor',
		descripcion: 'Duis faucibus lorem',
		cantidad: 1.0,
		valorUnitario: 10000,
		descuento: '10%',
		impuestos: 10000,
		bodega: 'Bodega 1',
		vendedor: 'Jhon Doe',
		tercero: 'Jane Doe',
		obsequio: true,
		totalNeto: 19000,
		actions: '',
		trash: '',
		statusModeBadge: 'success',
		prices: [
			{ label: 'Lista 1', price: '2.500' },
			{ label: 'Lista 2', price: '5.000' },
			{ label: 'Lista 3', price: '10.000' },
		], // Agrega los precios aquí
	},
	{
		item: 'Producto A',
		descripcion: 'Hayabusa',
		cantidad: 1.0,
		valorUnitario: 10000,
		descuento: '10%',
		impuestos: 10000,
		bodega: 'Bodega 1',
		vendedor: 'Jhon Doe',
		tercero: 'Jane Doe',
		obsequio: true,
		totalNeto: 19000,
		actions: '',
		trash: '',
		statusModeBadge: 'warning',
		prices: [
			{ label: 'Lista 4', price: '2.500' },
			{ label: 'Lista 5', price: '5.000' },
		], // Agrega los precios aquí
	},
	{
		item: 'Producto B',
		descripcion: 'Gsx-s',
		cantidad: 1.0,
		valorUnitario: 10000,
		descuento: '10%',
		impuestos: 10000,
		bodega: 'Bodega 2',
		vendedor: 'Jhon Doe',
		tercero: 'Jane Doe',
		obsequio: true,
		totalNeto: 19000,
		actions: '',
		trash: '',
		statusModeBadge: 'error',
		prices: [
			{ label: 'Lista 6', price: '10.000' },
			{ label: 'Lista 7', price: '10.000' },
		], // Agrega los precios aquí
	},
];
