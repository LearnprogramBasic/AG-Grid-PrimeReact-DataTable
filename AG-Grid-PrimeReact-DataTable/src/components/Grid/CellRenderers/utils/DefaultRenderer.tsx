import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';

export const DefaultRenderer: FC<ICellRendererParams> = props => {
	// Si es la fila fija, retorna un valor vacío
	if (props.node.rowPinned === 'bottom') {
		return <div style={{ height: '100%' }}></div>;
	}

	// Retorna el valor normal si no es la fila fija
	return <span>{props.value}</span>;
};
