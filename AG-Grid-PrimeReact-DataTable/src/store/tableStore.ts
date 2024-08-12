import {create} from 'zustand';
import { RowData } from '../typings/rowDataSchema';


interface TableStore {
  rowData: RowData[];
  filteredItems: RowData[];
  editRowIndex: number | null;
  setRowData: (rowData: RowData[]) => void;
  setFilteredItems: (filteredItems: RowData[]) => void;
  setEditRowIndex: (index: number | null) => void;
}

export const useTableStore = create<TableStore>((set) => ({
  rowData: [],
  filteredItems: [],
  editRowIndex: null,
  setRowData: (rowData) => set({ rowData }),
  setFilteredItems: (filteredItems) => set({ filteredItems }),
  setEditRowIndex: (index) => set({ editRowIndex: index }),
}));
