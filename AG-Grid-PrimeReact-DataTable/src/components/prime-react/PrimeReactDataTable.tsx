import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './PrimeReactDataTable.scss';
import { rowData as initialRowData, RowData } from './data/data';
import { FC } from 'react';
import EllipsisLinkBadge from './components/EllipsisLinkBadge/EllipsisLinkBadge';

const PrimeReactDataTable: FC = () => {
  const [rowData, setRowData] = useState<RowData[]>(initialRowData);

  const onObsequioChange = (e: React.ChangeEvent<HTMLInputElement>, item: string) => {
    const updatedRows = rowData.map((row) => {
      if (row.item === item) {
        return { ...row, obsequio: !row.obsequio };
      }
      return row;
    });
    setRowData(updatedRows);
  };

  const obsequioBodyTemplate = (rowData: RowData) => (
    <Checkbox
      checked={rowData.obsequio}
      onChange={(e) => onObsequioChange(e, rowData.item)}
    />
  );

  const onEditorValueChange = (props: any, value: any) => {
    let updatedRows = [...rowData];
    updatedRows[props.rowIndex][props.field] = value;
    setRowData(updatedRows);
  };

  const inputTextEditor = (props: any, field: string) => {
    return (
      <InputText
        type="text"
        value={props.rowData[field]}
        onChange={(e) => onEditorValueChange(props, e.target.value)}
        className="ellipsis"
        style={{ width: '100%' }}
      />
    );
  };

  const ellipsisTemplate = (rowData: RowData, field: string) => {
    const value = String(rowData[field]);
    return (
      <div className="ellipsis" title={value}>
        {value}
      </div>
    );
  };

  const actionsBodyTemplate = (rowData: RowData) => (
    <EllipsisLinkBadge 
        href={'https://example.com'} 
        disabled={false} 
        messageTooltipEllipsis={'Click here for more options'} 
        statusModeBadge={'success'}
      />
  );

  return (
    <div className="table-container">
      <DataTable
        value={rowData}
        reorderableRows
        onRowReorder={(e) => setRowData(e.value)}
        columnResizeMode="expand"
        resizableColumns
        showGridlines
        scrollable
        scrollHeight="400px"
        tableStyle={{ minWidth: '50rem' }}
        editMode="cell"
        pt={{
          root: {
            className: 'p-datatable',
          },
          wrapper: {
            className: 'p-datatable-wrapper',
          }
        }}
      >
        <Column rowReorder style={{ width: '3rem' }} />
        <Column
          header="N°"
          body={(rowData, options) => options.rowIndex + 1}
          style={{ width: '3rem' }}
        />
        <Column
          field="item"
          header="Item"
          body={(rowData) => ellipsisTemplate(rowData, 'item')}
          editor={(props) => inputTextEditor(props, 'item')}
          sortable
          style={{ maxWidth: '200px' }}
        />
        <Column
          field="descripcion"
          header="Descripción"
          body={(rowData) => ellipsisTemplate(rowData, 'descripcion')}
          editor={(props) => inputTextEditor(props, 'descripcion')}
          sortable
          style={{ maxWidth: '200px' }}
        />
        <Column
          field="cantidad"
          header="Cantidad"
          body={(rowData) => ellipsisTemplate(rowData, 'cantidad')}
          editor={(props) => inputTextEditor(props, 'cantidad')}
          sortable
        />
        <Column
          field="valorUnitario"
          header="Valor Unitario"
          body={(rowData) => ellipsisTemplate(rowData, 'valorUnitario')}
          editor={(props) => inputTextEditor(props, 'valorUnitario')}
          sortable
        />
        <Column
          field="descuento"
          header="Desc. (%)"
          body={(rowData) => ellipsisTemplate(rowData, 'descuento')}
          editor={(props) => inputTextEditor(props, 'descuento')}
          sortable
        />
        <Column
          field="impuestos"
          header="Impuestos y Retenciones"
          body={(rowData) => ellipsisTemplate(rowData, 'impuestos')}
          editor={(props) => inputTextEditor(props, 'impuestos')}
          sortable
        />
        <Column
          field="bodega"
          header="Bodega"
          body={(rowData) => ellipsisTemplate(rowData, 'bodega')}
          editor={(props) => inputTextEditor(props, 'bodega')}
          sortable
        />
        <Column
          field="vendedor"
          header="Vendedor"
          body={(rowData) => ellipsisTemplate(rowData, 'vendedor')}
          editor={(props) => inputTextEditor(props, 'vendedor')}
          sortable
        />
        <Column
          field="tercero"
          header="Tercero"
          body={(rowData) => ellipsisTemplate(rowData, 'tercero')}
          editor={(props) => inputTextEditor(props, 'tercero')}
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
          body={(rowData) => ellipsisTemplate(rowData, 'totalNeto')}
          editor={(props) => inputTextEditor(props, 'totalNeto')}
          sortable
        />
        <Column
          header="Actions"
          body={actionsBodyTemplate}
          style={{ width: '150px' }}
        />
        <Column
          header="Trash"
          body={() => <i className="pi pi-trash" style={{ cursor: 'pointer' }}></i>}
          style={{ width: '50px' }}
        />
      </DataTable>
    </div>
  );
};

export default PrimeReactDataTable;
