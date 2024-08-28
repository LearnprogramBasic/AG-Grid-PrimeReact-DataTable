import create from 'zustand';
import { RowData } from '../MockData/rowData';
import { rowData as initialRowData } from '../MockData/rowData';

interface GridState {
	restrictItemsWithoutStock: boolean;
	discountByValue: boolean;
	rowData: RowData[];
	addRow: () => void;
	removeRow: (index: number) => void;
	setRestrictItemsWithoutStock: (restrict: boolean) => void;
	setDiscountByValue: (discount: boolean) => void;
	setRowData: (data: RowData[]) => void;
}

export const useGridStore = create<GridState>(set => ({
	restrictItemsWithoutStock: false,
	discountByValue: false,
	rowData: initialRowData, // Esto inicializa la data
	setRestrictItemsWithoutStock: restrict => set({ restrictItemsWithoutStock: restrict }),
	setDiscountByValue: discount => set({ discountByValue: discount }),
	setRowData: data => set({ rowData: data }),

	addRow: () =>
		set(state => {
			console.log('Antes de agregar:', state.rowData);
			const newRow: RowData = {
				item: 'Nuevo ítem',
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
				statusModeBadge: '',
				prices: [],
			};
			return {
				rowData: [newRow, ...state.rowData],
			};
		}),

	removeRow: (index: number) =>
		set(state => ({
			rowData: state.rowData.filter((_, i) => i !== index),
		})),
}));
