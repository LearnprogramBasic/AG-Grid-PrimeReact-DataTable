import { FC } from "react";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import "./PrimeReactDataTable.scss";
import { useTableStore } from "../../store/tableStore";
import { Column, ColumnBodyOptions } from "primereact/column";

import CustomAutoComplete from "./CellRenderers/CustomAutoComplete.tsx";
import { RowData } from "../../typings/rowData.ts";

const PrimeReactDataTable: FC = () => {
  const { rowData, setRowData } = useTableStore();

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

  // Define la fila en blanco al final
  const emptyRow: RowData = {
    id: 9999, // Un id que no coincida con los demás
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

  const emptyRowTemplate = (data: RowData, options: ColumnBodyOptions): JSX.Element | null => {
    if (data.id === 9999 && options.field === 'item') {
      return (
        <Button
          label="+ Agregar ítem"
          icon="pi pi-plus"
          className="p-button-link"
          onClick={addNewItem}
          style={{ textAlign: 'left', color: '#007acc', backgroundColor: '#fff', border: '1px solid #ccc' }} // Estilo de fondo blanco
        />
      );
    }
    return null; // Retorna null si no es la fila vacía
  };

  const itemTemplate = (data: RowData, options: ColumnBodyOptions): JSX.Element | null => {
    if (data.id === 9999) {
      return emptyRowTemplate(data, options);
    }
    return (
      <CustomAutoComplete
      />
    );
  };

  return (
    <div className="table-container">
      <DataTable
        value={[...rowData, emptyRow]} // Agrega la fila en blanco al final de los datos
        reorderableRows
        onRowReorder={(e) => {
          const reorderedRows = e.value.filter((row: RowData) => row.id !== 9999);
          setRowData(reorderedRows);
        }}
        onSort={(e) => {
          const sortedRows = e.data.filter((row: RowData) => row.id !== 9999);
          setRowData(sortedRows);
        }}
        columnResizeMode="expand"
        resizableColumns
        showGridlines
        scrollable
        scrollHeight="400px"
        tableStyle={{ minWidth: "50rem" }}
        editMode="cell"
      >
        <Column
          rowReorder
          headerStyle={{ textAlign: "center" }}
          style={{ width: "3rem" }}
          rowReorderDisabled={(rowData: RowData) => rowData.id === 9999} // Desactiva el reordenamiento de la fila fija
        />
        <Column
          header="N°"
          body={(_, options) => options.rowIndex + 1}
          headerStyle={{ textAlign: "center" }}
          style={{ width: "3rem" }}
        />
        <Column
          field="item"
          header="Item"
          body={itemTemplate} // Usa la plantilla personalizada para el item
          sortable
          style={{ maxWidth: "200px" }}
        />
        <Column
          field="descripcion"
          header="Descripción"
          body={emptyRowTemplate} // Puedes aplicar lógica similar para otras columnas
          sortable
          style={{ maxWidth: "200px" }}
        />
        <Column
          field="cantidad"
          header="Cantidad"
          body={emptyRowTemplate} // Aplica la lógica de fila vacía donde sea necesario
          sortable
        />
        <Column
          field="valorUnitario"
          header="Valor Unitario"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="descuento"
          header="Desc. (%)"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="impuestos"
          header="Impuestos y Retenciones"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="bodega"
          header="Bodega"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="vendedor"
          header="Vendedor"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="tercero"
          header="Tercero"
          body={emptyRowTemplate}
          sortable
        />
        <Column
          field="obsequio"
          header="Obsequio"
          body={emptyRowTemplate}
        />
        <Column
          field="totalNeto"
          header="Total Neto"
          body={emptyRowTemplate}
          sortable
        />
      </DataTable>
    </div>
  );
};

export default PrimeReactDataTable;
