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
  
  export const mockProducts: Product[] = [
    {
      codigo: "000001",
      nombre: "Producto A",
      referencia: "REF001",
      descripcionCorta: "Desc A",
      valorUnitario: 5000,
      bodega: "Bodega 1",
      vendedor: "Vendedor A",
      tercero: "Tercero A"
    },
    {
      codigo: "000002",
      nombre: "Producto B",
      referencia: "REF002",
      descripcionCorta: "Desc B",
      valorUnitario: 10000,
      bodega: "Bodega 2",
      vendedor: "Vendedor B",
      tercero: "Tercero B"
    },
    {
      codigo: "000003",
      nombre: "Producto C",
      referencia: "REF003",
      descripcionCorta: "Desc C",
      valorUnitario: 7500,
      bodega: "Bodega 3",
      vendedor: "Vendedor C",
      tercero: "Tercero C"
    },
    // Agrega más productos según sea necesario
  ];
  