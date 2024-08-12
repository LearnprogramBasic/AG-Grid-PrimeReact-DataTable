import { CheckboxChangeEvent } from "primereact/checkbox";

export interface RowData {
    id: number;
    item: string;
    descripcion: string;
    cantidad: number;
    valorUnitario: number;
    descuento: string;
    impuestos: number;
    bodega: string;
    vendedor: string;
    tercero: string;
    obsequio: false;
    totalNeto: number;
  }

  export interface LabeledCheckboxProps {
    checked: boolean;
    label: string;
    onChange: (e: CheckboxChangeEvent) => void;
}