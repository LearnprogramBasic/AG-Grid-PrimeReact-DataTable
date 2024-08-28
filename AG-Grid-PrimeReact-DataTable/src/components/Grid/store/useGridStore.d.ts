import { RowData } from '../MockData/rowData';
interface GridState {
    restrictItemsWithoutStock: boolean;
    discountByValue: boolean;
    rowData: RowData[];
    addRow: () => void;
    setRestrictItemsWithoutStock: (restrict: boolean) => void;
    setDiscountByValue: (discount: boolean) => void;
    setRowData: (data: RowData[]) => void;
}
export declare const useGridStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GridState>>;
export {};
