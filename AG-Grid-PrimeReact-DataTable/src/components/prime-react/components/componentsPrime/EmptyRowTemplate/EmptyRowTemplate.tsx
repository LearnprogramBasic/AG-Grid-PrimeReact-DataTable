import { FC } from "react";
import { Button } from "primereact/button";
import { ColumnBodyOptions } from "primereact/column";
import { RowData } from "../../../../../typings/rowData.ts";


interface EmptyRowTemplateProps {
  data: RowData;
  options: ColumnBodyOptions;
  addNewItem: () => void;
}

export const EmptyRowTemplate: FC<EmptyRowTemplateProps> = ({ data, options, addNewItem }) => {
  if (data.id === 9999 && options.field === 'item') {
    return (
      <Button
        label="+ Agregar ítem"
        icon="pi pi-plus"
        className="p-button-link"
        onClick={addNewItem}
        style={{ textAlign: 'left', color: '#007acc', backgroundColor: '#fff' }} // Estilo de fondo blanco
      />
    );
  }
  return null;
};
