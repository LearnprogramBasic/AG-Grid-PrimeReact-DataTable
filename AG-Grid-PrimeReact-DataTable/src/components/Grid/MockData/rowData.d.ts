export interface RowData {
    n?: number;
    item: string;
    descripcion: string;
    cantidad: number;
    valorUnitario: number;
    descuento: string;
    impuestos: number;
    bodega: string;
    vendedor: string;
    tercero: string;
    obsequio: boolean;
    totalNeto: number;
    actions: string;
    trash: string;
    statusModeBadge: string;
}
export declare const rowData: RowData[];
