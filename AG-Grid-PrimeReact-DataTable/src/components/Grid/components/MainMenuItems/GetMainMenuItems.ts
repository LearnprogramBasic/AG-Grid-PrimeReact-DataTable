import { GetMainMenuItemsParams } from '@ag-grid-community/core';
import { createMenuItem } from '@components/Grid/components/MainMenuItems/menuHelpers';
import { useGridStore } from '@/services/store/useGridStore';
import { GetMainMenuItemsType, MenuConfigItem } from '@typings/typingsGrid/types';

export const GetMainMenuItems: GetMainMenuItemsType = (params: GetMainMenuItemsParams) => {
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
