import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';

export const withPinnedCheck = <P extends ICellRendererParams>(Renderer: FC<P>): FC<P> => {
	return props => {
		if (props.node.rowPinned === 'bottom') {
			return <div style={{ height: '100%' }}></div>;
		}

		return <Renderer {...props} />;
	};
};
