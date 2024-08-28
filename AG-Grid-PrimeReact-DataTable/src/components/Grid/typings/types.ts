import { RowNode, GridApi } from '@ag-grid-community/core';
import { ICellRendererParams } from '@ag-grid-community/core';
import { ReactNode } from 'react';
import { Price } from '../MockData/rowData';

// checkboxTypes.ts
export interface Checkbox {
	label?: string;
	name?: string;
	checked: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	value?: string;
}

export interface CustomCheckboxAtomProps {
	options: Checkbox[];
	onChange: (checkedOptions: Checkbox[]) => void;
}

export interface ObsequioCheckboxRendererProps extends ICellRendererParams {
	value: Checkbox[];
	setValue: (value: Checkbox[]) => void;
}

// gridTypes.ts
export interface TrashIconCellRendererProps extends ICellRendererParams {
	node: RowNode;
	api: GridApi;
}

// iconTypes.ts
export interface ButtonIconAtomProps {
	icon: string;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: 'primary-blue' | 'primary-green' | 'secondary' | 'tertiary';
	onClick?: () => void;
}

// managementButtonTypes.ts
export interface ManagementButtonIconMoleculeProps {
	typeIcon: 'ellipsis' | 'externalLink';
	modeBadge?: boolean;
	statusModeBadge?: 'error' | 'success' | 'warning';
	messageTooltipEllipsis?: string;
	ariaLabel?: string;
	showTooltip: boolean;
	onClick?: () => void;
}

export type ManagementButtonCellRendererProps = ICellRendererParams;

//PriceDropdown
export interface DropdownItemProps {
	label: string;
	price: string;
	onClick: () => void;
	style?: Record<string, unknown>;
}

export interface DropdownListProps {
	onSelectPrice: (price: string) => void;
	listTitle?: string;
	priceTitle?: string;
	style?: Record<string, unknown>;
	prices: Price[];
}

export interface PriceDropdownProps {
	icon?: ReactNode;
	isDropdownVisible?: boolean;
	style?: React.CSSProperties;
	value: string;
	onChange: (value: string) => void;
	prices: Price[]; // Ahora se recibe la lista de precios como prop
}
