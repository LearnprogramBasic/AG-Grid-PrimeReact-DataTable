//pendiente integrar al final

import { z } from 'zod';

// Esquema para Checkbox
export const CheckboxSchema = z.object({
	label: z.string().optional(),
	name: z.string().optional(),
	checked: z.boolean(),
	indeterminate: z.boolean().optional(),
	disabled: z.boolean().optional(),
	value: z.string().optional(),
});

export const CheckboxAtomPropsSchema = z.object({
	options: z.array(CheckboxSchema),
	onChange: z.function().args(z.array(CheckboxSchema)).returns(z.void()),
});

// Esquema para TrashIconCellRendererProps
export const TrashIconCellRendererPropsSchema = z.object({
	node: z.any(), // Podrías ajustar esto para reflejar mejor la estructura de RowNode
	api: z.any(), // Lo mismo aquí con GridApi
});

// Esquema para ButtonIconAtomProps
export const ButtonIconAtomPropsSchema = z.object({
	icon: z.string(),
	size: z.enum(['xs', 's', 'm', 'l', 'xl']).optional(),
	color: z.enum(['primary-blue', 'primary-green', 'secondary', 'tertiary']).optional(),
	onClick: z.function().args().returns(z.void()).optional(),
});

// Esquema para ManagementButtonIconMoleculeProps
export const ManagementButtonIconMoleculePropsSchema = z.object({
	typeIcon: z.enum(['ellipsis', 'externalLink']),
	modeBadge: z.boolean().optional(),
	statusModeBadge: z.enum(['error', 'success', 'warning']).optional(),
	messageTooltipEllipsis: z.string().optional(),
	ariaLabel: z.string().optional(),
	showTooltip: z.boolean(),
	onClick: z.function().args().returns(z.void()).optional(),
});

// Esquema para PriceDropdownProps
export const DropdownItemPropsSchema = z.object({
	label: z.string(),
	price: z.string(),
	onClick: z.function().args().returns(z.void()),
	style: z.record(z.unknown()).optional(),
});

export const DropdownListPropsSchema = z.object({
	onSelectPrice: z.function().args(z.string()).returns(z.void()),
	listTitle: z.string().optional(),
	priceTitle: z.string().optional(),
	style: z.record(z.unknown()).optional(),
});

export const PriceDropdownPropsSchema = z.object({
	icon: z.string().optional(),
	isDropdownVisible: z.boolean().optional(),
	style: z.any().optional(),
	value: z.string(),
	onChange: z.function().args(z.string()).returns(z.void()),
});
