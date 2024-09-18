import { create } from 'zustand';
import { rowData as initialRowData } from '@components/Grid/MockData/rowData';

import { GridState, TaxRowData } from '@components/Grid/props.type'; // Importa TaxRowData

export const useGridStore = create<GridState>(set => ({
	restrictItemsWithoutStock: false,
	discountByValue: false,
	rowData: initialRowData as TaxRowData[],
	agGridApi: null,

	setRestrictItemsWithoutStock: restrict => set({ restrictItemsWithoutStock: restrict }),
	setDiscountByValue: discount => set({ discountByValue: discount }),
	setRowData: data => set({ rowData: data }),
	setAgGridApi: api => set({ agGridApi: api }),

	addRow: () =>
		set(state => {
			console.log('Antes de agregar:', state.rowData);
			const newRow: TaxRowData = {
				tipo: 'IVA',
				impuesto: 'Nuevo impuesto',
				tarifa: '0%',
				valorImp: 0,
				base: 0,
				valorTotalImp: 0,
				trash: '',
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
