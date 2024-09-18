import { DefaultRendererProps } from '@typings/typingsGrid/types';
import { FC } from 'react';

export const DefaultRenderer: FC<DefaultRendererProps> = props => {
	if (props.node.rowPinned === 'bottom') {
		return <div style={{ height: '100%' }}></div>;
	}

	return <span>{props.value}</span>;
};
