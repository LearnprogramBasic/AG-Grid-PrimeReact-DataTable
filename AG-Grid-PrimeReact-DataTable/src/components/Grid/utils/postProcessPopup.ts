import { PostProcessPopupParams } from '@ag-grid-community/core';

export const postProcessPopup = (params: PostProcessPopupParams) => {
	if (params.type !== 'columnMenu') {
		return;
	}

	const columnId = params.column ? params.column.getId() : undefined;
	const ePopup = params.ePopup;

	if (columnId === 'cantidad') {
		ePopup.style.top = `${parseInt(ePopup.style.top) + 15}px`;
		ePopup.style.left = `${parseInt(ePopup.style.left) - 270}px`;
	} else if (columnId === 'descuento') {
		ePopup.style.top = `${parseInt(ePopup.style.top) + 15}px`;
		ePopup.style.left = `${parseInt(ePopup.style.left) - 220}px`;
	}
};
