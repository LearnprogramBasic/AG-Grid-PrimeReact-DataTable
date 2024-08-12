import { z } from 'zod';

export const rowDataSchema = z.object({
  id: z.number().int(),
  item: z.string().min(1, { message: "El campo 'item' es obligatorio" }),
  descripcion: z.string().optional(),
  cantidad: z.number().min(1, { message: "La cantidad debe ser mayor a 0" }),
  valorUnitario: z.number().min(0, { message: "El valor unitario no puede ser negativo" }),
  descuento: z.string().optional(),
  impuestos: z.number().min(0).optional(),
  bodega: z.string().optional(),
  vendedor: z.string().optional(),
  tercero: z.string().optional(),
  obsequio: z.boolean(),
  totalNeto: z.number().min(0, { message: "El total neto no puede ser negativo" }),
});

export type RowData = z.infer<typeof rowDataSchema>;
