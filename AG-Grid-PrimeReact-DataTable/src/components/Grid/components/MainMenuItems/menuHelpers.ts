import { MenuItemDef } from '@ag-grid-community/core';

export const createMenuItem = (name: string, action: () => void, isChecked: boolean): MenuItemDef => ({
	name,
	suppressCloseOnSelect: false,
	action,
	icon: `<span class="${isChecked ? 'ag-icon ag-icon-checkbox-checked' : 'ag-icon ag-icon-checkbox-unchecked'}"></span>`,
});
