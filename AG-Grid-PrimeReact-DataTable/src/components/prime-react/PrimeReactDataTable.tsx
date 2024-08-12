import { FC, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { CheckboxChangeEvent } from "primereact/checkbox";
import "./PrimeReactDataTable.scss"; // Asegúrate de importar tu SCSS aquí
import { useTableStore } from "../../store/tableStore";
import { RowData } from "../../typings/rowDataSchema";
import { rowData as initialRowData } from "./data/data";
import EllipsisLinkBadge from "./components/EllipsisLinkBadge/EllipsisLinkBadge";
import HeaderMenuComponent from "./components/HeaderMenuComponent/HeaderMenuComponent";
import LabeledCheckbox from "./components/LabeledCheckbox/LabeledCheckbox";
import { AutoComplete } from "primereact/autocomplete";

const PrimeReactDataTable: FC = () => {
  const { rowData, setRowData, filteredItems, setFilteredItems } = useTableStore();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setRowData(initialRowData);
  }, [setRowData]);

  const searchItem = (event: { query: string }) => {
    const query = event.query.toLowerCase();
    const results = rowData.filter((item) => item.item.toLowerCase().includes(query));
    setFilteredItems(results);
  };

  const onObsequioChange = (e: CheckboxChangeEvent, id: number) => {
    const updatedRows = rowData.map((row) => (row.id === id ? { ...row, obsequio: e.checked ?? false } : row));
    setRowData(updatedRows);
  };

  const obsequioBodyTemplate = (rowData: RowData) => (
    <LabeledCheckbox checked={rowData.obsequio} label="Obsequio" onChange={(e) => onObsequioChange(e, rowData.id)} />
  );

  const onEditorValueChange = <T extends keyof RowData>(props: ColumnEditorOptions, value: RowData[T]) => {
    const updatedRows = [...rowData];
    const field = props.field as T;

    if (props.rowIndex !== undefined) {
      updatedRows[props.rowIndex][field] = value;
      setRowData(updatedRows);
    }
  };

  const itemEditor = (props: ColumnEditorOptions) => (
    <AutoComplete
      value={query}
      suggestions={filteredItems}
      completeMethod={searchItem}
      field="item"
      onChange={(e) => {
        setQuery(e.value);
        onEditorValueChange(props, e.value);
      }}
      onSelect={(e) => {
        onEditorValueChange(props, e.value);
        setFilteredItems([]); // Ocultar la lista después de seleccionar
      }}
      dropdown={false}
      forceSelection
      style={{ width: '100%' }} // Asegura que el AutoComplete ocupe todo el ancho de la celda
    />
  );

  const inputTextEditor = (props: ColumnEditorOptions, field: keyof RowData) => (
    <InputText
      type="text"
      value={props.rowData[field]}
      onChange={(e) => onEditorValueChange(props, e.target.value)}
      className="ellipsis"
      style={{ width: '100%' }} // Ajuste de ancho al 100% de la celda
    />
  );

  const ellipsisTemplate = (rowData: RowData, field: keyof RowData) => (
    <div className="ellipsis" title={String(rowData[field])}>
      {rowData[field]}
    </div>
  );

  const actionsBodyTemplate = () => (
    <EllipsisLinkBadge
      href={"https://example.com"}
      disabled={false}
      messageTooltipEllipsis={"Click here for more options"}
      statusModeBadge={"success"}
    />
  );

  return (
    <div className="table-container">
      <DataTable
        value={rowData}
        reorderableRows
        columnResizeMode="expand"
        resizableColumns
        showGridlines
        scrollable
        scrollHeight="400px"
        tableStyle={{ minWidth: "50rem" }}
        editMode="cell"
      >
        <Column rowReorder headerStyle={{ textAlign: "center" }} style={{ width: "3rem" }} />
        <Column
          header="N°"
          body={(_rowData, options: ColumnBodyOptions) => options.rowIndex + 1}
          headerStyle={{ textAlign: "center" }}
          style={{ width: "3rem" }}
        />
        <Column
          field="item"
          header="Item"
          body={(rowData) => ellipsisTemplate(rowData, "item")}
          editor={itemEditor}
          sortable
          style={{ maxWidth: "200px" }}
        />
        <Column
          field="descripcion"
          header="Descripción"
          body={(rowData) => ellipsisTemplate(rowData, "descripcion")}
          editor={(props) => inputTextEditor(props, "descripcion")}
          sortable
          style={{ maxWidth: "200px" }}
        />
        <Column
          field="cantidad"
          header={<HeaderMenuComponent label="Cantidad" menuLabel="Restringir ítems sin stock" />}
          body={(rowData) => ellipsisTemplate(rowData, "cantidad")}
          editor={(props) => inputTextEditor(props, "cantidad")}
          sortable
        />
        <Column
          field="valorUnitario"
          header="Valor Unitario"
          body={(rowData) => ellipsisTemplate(rowData, "valorUnitario")}
          editor={(props) => inputTextEditor(props, "valorUnitario")}
          sortable
        />
        <Column
          field="descuento"
          header={<HeaderMenuComponent label="Desc. (%)" menuLabel="Descuento por valor" />}
          body={(rowData) => ellipsisTemplate(rowData, "descuento")}
          editor={(props) => inputTextEditor(props, "descuento")}
          sortable
        />
        <Column
          field="impuestos"
          header="Impuestos y Retenciones"
          body={(rowData) => ellipsisTemplate(rowData, "impuestos")}
          editor={(props) => inputTextEditor(props, "impuestos")}
          sortable
        />
        <Column
          field="bodega"
          header="Bodega"
          body={(rowData) => ellipsisTemplate(rowData, "bodega")}
          editor={(props) => inputTextEditor(props, "bodega")}
          sortable
        />
        <Column
          field="vendedor"
          header="Vendedor"
          body={(rowData) => ellipsisTemplate(rowData, "vendedor")}
          editor={(props) => inputTextEditor(props, "vendedor")}
          sortable
        />
        <Column
          field="tercero"
          header="Tercero"
          body={(rowData) => ellipsisTemplate(rowData, "tercero")}
          editor={(props) => inputTextEditor(props, "tercero")}
          sortable
        />
        <Column
          field="obsequio"
          header="Obsequio"
          body={obsequioBodyTemplate}
        />
        <Column
          field="totalNeto"
          header="Total Neto"
          body={(rowData) => ellipsisTemplate(rowData, "totalNeto")}
          editor={(props) => inputTextEditor(props, "totalNeto")}
          sortable
        />
        <Column header="Actions" body={actionsBodyTemplate} style={{ width: "150px" }} />
      </DataTable>
    </div>
  );
};

export default PrimeReactDataTable;
