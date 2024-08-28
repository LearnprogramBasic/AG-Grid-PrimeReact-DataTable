import { useGridStore } from '../store/useGridStore';

export const useFilteredRowData = () => {
	const { restrictItemsWithoutStock, rowData } = useGridStore();

	const filteredRowData = restrictItemsWithoutStock ? rowData.filter(row => row.cantidad > 0) : rowData;

	return filteredRowData;
};
