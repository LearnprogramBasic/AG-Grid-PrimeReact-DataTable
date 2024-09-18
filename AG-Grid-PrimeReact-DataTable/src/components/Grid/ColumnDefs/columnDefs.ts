import { ColDef, EditableCallbackParams, ICellRendererParams } from '@ag-grid-community/core';
import {
	GiftCheckboxRenderer,
	ManagementButtonCellRenderer,
	PriceActionButtonRenderer,
	PriceDropdownRenderer,
	TrashIconCellRenderer,
	DefaultRenderer,
	withPinnedCheck,
} from '../CellRenderers';
import { GetMainMenuItems } from '../components';
import { FC } from 'react';
import { getStatusMessage } from '../utils/StatusMessageRenderer';
import ProductAutocompleteRenderer from '../CellRenderers/ActionRenderers/ProductAutocompleteRenderer';

export const columnDefs: ColDef[] = [
	{
		headerName: '',
		field: 'drag',
		rowDrag: true,
		sortable: false,
		filter: false,
		cellClass: 'drag-handle',
		suppressHeaderMenuButton: true,
		editable: false,
		minWidth: 50,
		resizable: false,
		suppressAutoSize: true,
	},
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
		suppressHeaderMenuButton: true,
		editable: false,
		resizable: false,
		minWidth: 65,
	},
	{
		field: 'item',
		headerName: 'Item',
		suppressHeaderMenuButton: true,
		editable: params => !params.node.rowPinned,
		cellRendererSelector: (params: ICellRendererParams) => {
			if (params.node.rowPinned === 'bottom') {
				return {
					component: 'buttonAddRenderer',
				};
			}
		},
		cellEditor: ProductAutocompleteRenderer,
		cellEditorPopup: true,
		tooltipValueGetter: () => {
			return 'Puedes añadir máximo 500 registros';
		},
		minWidth: 230,
	},
	{
		field: 'descripcion',
		headerName: 'Descripción',
		suppressHeaderMenuButton: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	},
	{
		field: 'cantidad',
		headerName: 'Cantidad',
		editable: params => !params.node.rowPinned,
		menuTabs: ['generalMenuTab'],
		mainMenuItems: GetMainMenuItems,
		cellRenderer: DefaultRenderer,
		suppressHeaderMenuButton: false,
	},
	{
		field: 'valorUnitario',
		headerName: 'Valor Unitario',
		cellEditor: PriceDropdownRenderer,
		cellEditorPopup: true,
		suppressHeaderMenuButton: true,
		editable: (params: EditableCallbackParams) => !params.node.rowPinned,
		cellRenderer: (params: ICellRendererParams) => {
			if (params.node.rowPinned) {
				return params.value !== 0 ? params.value : '';
			}
			return params.value;
		},
	},

	{
		field: 'descuento',
		headerName: 'Desc. (%)',
		editable: params => !params.node.rowPinned,
		mainMenuItems: GetMainMenuItems,
		cellRenderer: DefaultRenderer,
		suppressHeaderMenuButton: false,
	},
	{
		field: 'impuestos',
		headerName: 'Impuestos y Retenciones',
		editable: params => !params.node.rowPinned,
		suppressHeaderMenuButton: true,
		cellEditor: PriceActionButtonRenderer,
		cellEditorPopup: true,
		cellRenderer: DefaultRenderer,
	},
	{
		field: 'bodega',
		headerName: 'Bodega',
		suppressHeaderMenuButton: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	},
	{
		field: 'vendedor',
		headerName: 'Vendedor',
		suppressHeaderMenuButton: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	},
	{
		field: 'tercero',
		headerName: 'Tercero',
		suppressHeaderMenuButton: true,
		cellRenderer: DefaultRenderer,
		editable: params => !params.node.rowPinned,
	},
	{
		field: 'obsequio',
		headerName: 'Obsequio',
		suppressHeaderMenuButton: true,
		// cellRenderer: GiftCheckboxRenderer,
		cellRenderer: withPinnedCheck(GiftCheckboxRenderer as FC<ICellRendererParams>),

		// editable: params => !params.node.rowPinned,
		editable: false,
	},
	{
		field: 'totalNeto',
		headerName: 'Total Neto',
		suppressHeaderMenuButton: true,
		cellRenderer: DefaultRenderer,
		// editable: params => !params.node.rowPinned,
		editable: false,
	},
	{
		field: '',
		// headerName: 'Actions',
		cellRenderer: withPinnedCheck(ManagementButtonCellRenderer),
		editable: false,
		minWidth: 50,
		resizable: false,
		suppressHeaderMenuButton: true,
		sortable: false,
		filter: false,
		// editable: params => !params.node.rowPinned,
		cellEditorPopup: true,
		tooltipValueGetter: params => getStatusMessage(params.data.statusModeBadge),
	},
	{
		field: '',
		// headerName: 'Trash',
		cellRenderer: withPinnedCheck(TrashIconCellRenderer),
		suppressHeaderMenuButton: true,
		sortable: false,
		filter: false,
		// editable: params => !params.node.rowPinned,
		editable: false,
		minWidth: 50,
		resizable: false,
	},
];
