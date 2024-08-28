import { ColDef, EditableCallbackParams, ICellRendererParams } from '@ag-grid-community/core';
import {
	ButtonAddRenderer,
	GiftCheckboxRenderer,
	ManagementButtonCellRenderer,
	PriceActionButtonRenderer,
	PriceDropdownRenderer,
	TrashIconCellRenderer,
	DefaultRenderer,
	withPinnedCheck, // Importa el renderizador por defecto
} from '../CellRenderers'; // Asegúrate de que este archivo exista y esté correctamente organizado
import { GetMainMenuItems } from '../components';
import { FC } from 'react';
import { getStatusMessage } from '../utils/StatusMessageRenderer'; // pendiente esto es una simulacion

export const columnDefs: ColDef[] = [
	{
		headerName: '',
		field: 'drag',
		rowDrag: true, // Mantén el arrastre activado (esto es lo que muestra el ícono)
		width: 50,
		sortable: false,
		filter: false,
		cellClass: 'drag-handle',
		suppressMenu: true,
		editable: false,
	},
	{
		headerName: 'N°',
		field: 'n',
		valueGetter: params => {
			if (params.node && params.node.rowPinned === 'bottom') {
				// Asegúrate de que params.node no sea null antes de acceder a rowPinned
				return params.data.n; // Usa el valor calculado para la fila fija
			} else if (params.node && params.node.rowIndex !== null) {
				return params.node.rowIndex + 1; // Para las demás filas, usa el índice + 1
			}
			return null; // Maneja el caso en el que params.node o rowIndex sea null
		},
		suppressMenu: true,
		editable: false,
	},
	{
		field: 'item',
		headerName: 'Item',
		suppressMenu: true,
		editable: params => !params.node.rowPinned, // Deshabilita la edición en la fila fija
		cellRendererSelector: (params: ICellRendererParams) => {
			if (params.node.rowPinned === 'bottom') {
				// Si la fila es fija, muestra el ButtonAddRenderer
				return {
					component: ButtonAddRenderer,
				};
			} else {
				// Para las demás filas, por ahora, muestra el valor (puedes reemplazar esto con un autocompletado en el futuro)
				return {
					component: 'defaultRenderer',
				};
			}
		},
	},
	{
		field: 'descripcion',
		headerName: 'Descripción',
		suppressMenu: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	}, // Uso del DefaultRenderer para columnas que no tienen un renderizador personalizado
	{
		field: 'cantidad',
		headerName: 'Cantidad',
		editable: params => !params.node.rowPinned, // Deshabilita la edición en la fila fija
		menuTabs: ['generalMenuTab'],
		mainMenuItems: GetMainMenuItems,
		cellRenderer: DefaultRenderer, // Uso del DefaultRenderer
	},
	{
		field: 'valorUnitario',
		headerName: 'Valor Unitario',
		cellEditor: PriceDropdownRenderer,
		cellEditorPopup: true,
		suppressMenu: true,
		editable: (params: EditableCallbackParams) => !params.node.rowPinned, // Deshabilita la edición en la fila fija
	},

	{
		field: 'descuento',
		headerName: 'Desc. (%)',
		editable: params => !params.node.rowPinned, // Deshabilita la edición en la fila fija
		mainMenuItems: GetMainMenuItems,
		cellRenderer: DefaultRenderer, // Uso del DefaultRenderer
	},
	{
		field: 'impuestos',
		headerName: 'Impuestos y Retenciones',
		editable: params => !params.node.rowPinned, // Deshabilita la edición en la fila fija
		suppressMenu: true,
		cellEditor: PriceActionButtonRenderer,
		cellEditorPopup: true,
		cellRenderer: DefaultRenderer, // Uso del DefaultRenderer
	},
	{
		field: 'bodega',
		headerName: 'Bodega',
		suppressMenu: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	}, // Uso del DefaultRenderer
	{
		field: 'vendedor',
		headerName: 'Vendedor',
		suppressMenu: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	}, // Uso del DefaultRenderer
	{
		field: 'tercero',
		headerName: 'Tercero',
		suppressMenu: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	}, // Uso del DefaultRenderer
	{
		field: 'obsequio',
		headerName: 'Obsequio',
		suppressMenu: true,
		// cellRenderer: GiftCheckboxRenderer,
		cellRenderer: withPinnedCheck(GiftCheckboxRenderer as FC<ICellRendererParams>),

		editable: params => !params.node.rowPinned, // Deshabilita la edición en la fila fija
	},
	{
		field: 'totalNeto',
		headerName: 'Total Neto',
		suppressMenu: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	}, // Uso del DefaultRenderer
	{
		field: 'Actions',
		headerName: 'Actions',
		cellRenderer: withPinnedCheck(ManagementButtonCellRenderer),
		width: 100,
		suppressMenu: true,
		sortable: false,
		filter: false,
		editable: params => !params.node.rowPinned,
		cellEditorPopup: true,
		tooltipValueGetter: params => getStatusMessage(params.data.statusModeBadge),
	},
	{
		field: 'Trash',
		headerName: 'Trash',
		cellRenderer: withPinnedCheck(TrashIconCellRenderer),
		width: 50,
		suppressMenu: true,
		sortable: false,
		filter: false,
		editable: params => !params.node.rowPinned,
	},
];
