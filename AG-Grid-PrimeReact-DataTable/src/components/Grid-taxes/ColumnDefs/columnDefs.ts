import { ColDef, EditableCallbackParams, ICellRendererParams } from '@ag-grid-community/core';
import { TrashIconCellRenderer, DefaultRenderer, withPinnedCheck } from '../CellRenderers';
import { TipoSelectRenderer } from '../CellRenderers/SelectRenderers/TipoSelectRenderer';
import { ImpuestoSelectRenderer } from '../CellRenderers/SelectRenderers/ImpuestoSelectRenderer';

export const columnDefs: ColDef[] = [
	{
		headerName: 'N°',
		field: 'n',
		valueGetter: params => {
			if (params.node && params.node.rowPinned === 'bottom') {
				return params.data.n;
			} else if (params.node && params.node.rowIndex !== null) {
				return params.node.rowIndex + 1;
			}
			return null;
		},
		editable: false,
	},
	{
		field: 'tipo',
		headerName: 'Tipo',
		editable: params => !params.node.rowPinned, // Solo editable si no está "pinned"
		cellRendererSelector: (params: ICellRendererParams) => {
			if (params.node.rowPinned === 'bottom') {
				if (params.data.tipo === 'Agregar impuesto') {
					return { component: 'buttonAddRenderer' }; // Botón para agregar filas en la fila "pinned"
				}
				if (params.data.tipo === 'Total') {
					return { component: 'defaultRenderer' }; // No renderizamos nada especial para la fila de totales
				}
			}
		},
		cellEditorPopup: true,
		cellEditor: TipoSelectRenderer, // Mantenemos el editor de selección para las filas no 'pinned'
	},

	{
		field: 'impuesto',
		headerName: 'Impuesto',
		cellEditorPopup: true,
		cellEditor: ImpuestoSelectRenderer, // Renderizado por defecto para mostrar texto
		editable: params => !params.node.rowPinned, // Solo editable si no está "pinned"
	},
	{
		field: 'tarifa',
		headerName: 'Tarifa', // Cambio de "cantidad" a "Tarifa"
		editable: params => !params.node.rowPinned,
		cellRenderer: DefaultRenderer,
		suppressHeaderMenuButton: true, // Sin menú en la cabecera
	},
	{
		field: 'valor imp.',
		headerName: 'Valor imp.',
		cellEditorPopup: true, // Ventana emergente para edición
		editable: (params: EditableCallbackParams) => !params.node.rowPinned, // Editable solo si no está "pinned"
		cellRenderer: (params: ICellRendererParams) => {
			if (params.node.rowPinned) {
				return params.value !== 0 ? params.value : ''; // Mostrar vacío si no hay valor en la fila "pinned"
			}
			return params.value;
		},
	},
	{
		field: 'base',
		headerName: 'Base',
		editable: params => !params.node.rowPinned || params.data.tipo === 'Agregar ítem', // Editable solo si no es la fila de totales
		cellRenderer: (params: ICellRendererParams) => {
			// Si es la fila de totales, mostramos el total calculado
			if (params.node.rowPinned && params.data.tipo === 'Total') {
				return params.value ? params.value.toFixed(2) : '0,00';
			}
			// Si es la fila de agregar ítem, dejamos el campo editable
			return DefaultRenderer(params);
		},
		suppressHeaderMenuButton: true, // Sin menú en la cabecera
	},
	{
		field: 'valor total imp.',
		headerName: 'Valor total imp.',
		editable: params => !params.node.rowPinned || params.data.tipo === 'Agregar ítem', // Editable solo si no es la fila de totales
		cellRenderer: (params: ICellRendererParams) => {
			// Si es la fila de totales, mostramos el valor total calculado
			if (params.node.rowPinned && params.data.tipo === 'Total') {
				return params.value ? params.value.toFixed(2) : '0,00';
			}
			// Si es la fila de agregar ítem, dejamos el campo editable
			return DefaultRenderer(params);
		},
		valueGetter: params => {
			// Verificamos si params.node no es nulo antes de acceder a rowPinned
			if (params.node && params.node.rowPinned && params.data.tipo === 'Total') {
				return params.data.valorTotalImp || 0;
			}
			// Para las demás filas, calculamos el valor total del impuesto
			const valorImp = params.data.valorImp || 0;
			const base = params.data.base || 0;
			return valorImp + base;
		},
	},

	{
		field: 'Trash',
		headerName: 'Trash',
		cellRenderer: withPinnedCheck(TrashIconCellRenderer), // Solo permite eliminación si no está "pinned"
		width: 50,
		sortable: false,
		filter: false,
		editable: params => !params.node.rowPinned,
		suppressHeaderMenuButton: true, // Sin menú en la cabecera
	},
];
