import { useEffect } from "react";
import { useTableStore } from "../store/tableStore";
import { RowData } from "../typings/rowData.ts";
import { DropdownListGroupItem, DropdownListSingleItem } from "@siigo-arquitectura/autocomplete-molecule";

export const useTableLogic = () => {
  const { rowData, setRowData } = useTableStore();

  useEffect(() => {
    const initialData: RowData[] = [
      {
        id: 1,
        item: 'Producto 1',
        descripcion: 'Descripción 1',
        cantidad: 2,
        valorUnitario: 1000,
        descuento: '10%',
        impuestos: 190,
        bodega: 'Bodega 1',
        vendedor: 'Vendedor 1',
        tercero: 'Tercero 1',
        obsequio: false,
        totalNeto: 2000,
      },
      // Más datos iniciales...
    ];

    setRowData(initialData);
  }, [setRowData]);

  const addNewItem = () => {
    const newItem: RowData = {
      id: rowData.length + 1,
      item: '',
      descripcion: '',
      cantidad: 1,
      valorUnitario: 0,
      descuento: '',
      impuestos: 0,
      bodega: '',
      vendedor: '',
      tercero: '',
      obsequio: false,
      totalNeto: 0,
    };
    setRowData([...rowData, newItem]);
  };

  const updateItemField = (index: number, selectedItems: (DropdownListSingleItem | DropdownListGroupItem)[]) => {
    const updatedRowData = [...rowData];
    updatedRowData[index].item = selectedItems[0].label;  // Puedes ajustar esto según los datos que necesitas
    setRowData(updatedRowData);
  };

  const emptyRow: RowData = {
    id: 9999,
    item: '+ Agregar ítem',
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
  };

  return { rowData, setRowData, addNewItem, emptyRow, updateItemField };
};
