import { PostProcessPopupParams } from '@ag-grid-community/core';

export const postProcessPopup = (params: PostProcessPopupParams) => {
	if (params.type !== 'columnMenu') {
		return;
	}

	const columnId = params.column?.getId();
	const ePopup = params.ePopup;

	// Configuración de desplazamiento por columna
	const offsetConfig: Record<string, { top: number; left: number }> = {
		cantidad: { top: 15, left: -270 },
		descuento: { top: 15, left: -220 },
	};

	// Aplicar desplazamiento si existe configuración para la columna
	const offset = offsetConfig[columnId || ''];
	if (offset) {
		ePopup.style.top = `${parseInt(ePopup.style.top) + offset.top}px`;
		ePopup.style.left = `${parseInt(ePopup.style.left) + offset.left}px`;
	}
};
