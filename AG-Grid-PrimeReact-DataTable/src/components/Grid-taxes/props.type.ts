import { ColDef, GridApi, ICellRendererParams, ITooltipParams } from '@ag-grid-community/core';
import { FC } from 'react';
import { CustomTooltip } from '@/components/Grid/components';
import { ButtonAddRenderer } from './CellRenderers';
// import { ImpuestoSelectRenderer } from './CellRenderers/SelectRenderers/ImpuestoSelectRenderer';
import { TipoSelectRenderer } from './CellRenderers/SelectRenderers/TipoSelectRenderer';

// Tipos relacionados con RowData
export interface Price {
	label: string;
	price: string;
}

export interface TaxRowData {
	tipo: string;
	impuesto: string;
	tarifa: string;
	valorImp: number;
	base: number;
	valorTotalImp: number;
	trash: string;
}

// Tipos relacionados con la configuración del grid
export interface GridState {
	restrictItemsWithoutStock: boolean;
	discountByValue: boolean;
	rowData: TaxRowData[];
	agGridApi: GridApi | null;
	setRestrictItemsWithoutStock: (restrict: boolean) => void;
	setDiscountByValue: (discount: boolean) => void;
	setRowData: (data: TaxRowData[]) => void;
	setAgGridApi: (api: GridApi) => void;
	addRow: () => void;
	removeRow: (index: number) => void;
}

// Tipos relacionados con los componentes de renderizado de celdas
export interface ButtonIconAtomProps {
	icon: string;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: 'primary-blue' | 'primary-green' | 'secondary' | 'tertiary';
	onClick?: () => void;
}

export interface TrashIconCellRendererProps extends ICellRendererParams, ButtonIconAtomProps {}
export type ButtonAddRendererProps = ICellRendererParams;
export type DefaultRendererProps = ICellRendererParams;

// Tipos para renderizadores con HOC
export type WithPinnedCheckProps<P extends ICellRendererParams> = FC<P>;

// Tipos relacionados con el tooltip
export type CustomTooltipProps = ITooltipParams;

// Tipos relacionados con el popup
export interface OffsetConfig {
	top: number;
	left: number;
}

// Tipos para la configuración por defecto de las columnas
export const defaultColDef: ColDef = {
	sortable: true,
	filter: false,
	resizable: true,
	editable: true,
	minWidth: 150,
	flex: 1,
	tooltipComponent: 'customTooltip',
};

// Tipos para los componentes del framework
export const frameworkComponents = {
	customTooltip: CustomTooltip,
	buttonAddRenderer: ButtonAddRenderer,
	tipoSelectRenderer: TipoSelectRenderer,
	// impuestoSelectRenderer: ImpuestoSelectRenderer,
};
