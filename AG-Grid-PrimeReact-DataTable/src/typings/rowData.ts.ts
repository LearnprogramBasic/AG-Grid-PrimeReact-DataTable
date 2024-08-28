import { AutocompleteMoleculeCustomEvent, DropdownListGroupItem, DropdownListSingleItem } from "@siigo-arquitectura/autocomplete-molecule";
import { CheckboxChangeEvent } from "primereact/checkbox";

export interface RowData {
  id: number;
  item: string;
  descripcion?: string; // Ahora permite undefined
  cantidad: number;
  valorUnitario: number;
  descuento?: string; // Ahora permite undefined
  impuestos?: number; // Ahora permite undefined
  bodega?: string; // Ahora permite undefined
  vendedor?: string; // Ahora permite undefined
  tercero?: string; // Ahora permite undefined
  obsequio: boolean;
  totalNeto: number;
}



  export interface LabeledCheckboxProps {
    checked: boolean;
    label: string;
    onChange: (e: CheckboxChangeEvent) => void;
}


export interface Product {
  codigo: string;
  nombre: string;
  referencia: string;
  descripcionCorta: string;
  valorUnitario: number;
  bodega: string;
  vendedor: string;
  tercero: string;
}

export interface ProductSearchRendererProps {
  data: (DropdownListSingleItem | DropdownListGroupItem)[];
  placeholder?: string;
  label?: string;
  onValueSelectChange: (selectedItems: (DropdownListSingleItem | DropdownListGroupItem)[]) => void;
}


export interface AutocompleteMoleculeProps {
  data: (DropdownListSingleItem | DropdownListGroupItem)[];
  placeholder?: string;
  label?: string;
  onValueSelectChangeEvent: (
    event: AutocompleteMoleculeCustomEvent<(DropdownListSingleItem | DropdownListGroupItem)[]>
  ) => void;
  // Añade más props según las necesidades de tu componente
}




