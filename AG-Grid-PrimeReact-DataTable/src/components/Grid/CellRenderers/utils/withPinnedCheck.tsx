import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';

export const withPinnedCheck = <P extends ICellRendererParams>(Renderer: FC<P>): FC<P> => {
	return props => {
		// Si es la fila fija, retorna un valor vacío
		if (props.node.rowPinned === 'bottom') {
			return <div style={{ height: '100%' }}></div>;
		}

		// De lo contrario, usa el renderizador original
		return <Renderer {...props} />;
	};
};
