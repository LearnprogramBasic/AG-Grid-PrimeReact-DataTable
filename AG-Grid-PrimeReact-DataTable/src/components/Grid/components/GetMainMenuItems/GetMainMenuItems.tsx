import { GetMainMenuItemsParams, MenuItemDef } from '@ag-grid-community/core';
import { useGridStore } from '../../store/useGridStore';

interface MenuConfigItem {
	name: string;
	action: () => void;
	isChecked: boolean;
}

const createMenuItem = (name: string, action: () => void, isChecked: boolean): MenuItemDef => ({
	name,
	suppressCloseOnSelect: true, // Suprimir el cierre del menú al seleccionar, si es necesario
	action,
	icon: `<span class="${isChecked ? 'ag-icon ag-icon-checkbox-checked' : 'ag-icon ag-icon-checkbox-unchecked'}"></span>`,
});

export const GetMainMenuItems = (params: GetMainMenuItemsParams): (string | MenuItemDef)[] => {
	const { restrictItemsWithoutStock, setRestrictItemsWithoutStock, discountByValue, setDiscountByValue } =
		useGridStore.getState();

	const menuConfig: Record<string, MenuConfigItem> = {
		cantidad: {
			name: 'Restringir ítems sin stock',
			action: () => setRestrictItemsWithoutStock(!restrictItemsWithoutStock),
			isChecked: restrictItemsWithoutStock,
		},
		descuento: {
			name: 'Descuento por valor',
			action: () => setDiscountByValue(!discountByValue),
			isChecked: discountByValue,
		},
	};

	const columnId = params.column.getId();

	if (menuConfig[columnId]) {
		const { name, action, isChecked } = menuConfig[columnId];
		return [createMenuItem(name, action, isChecked)];
	}

	return [];
};
