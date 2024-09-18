import { FC } from 'react';
import './index.scope.scss';
import { CustomTooltipProps } from '@ag-grid-community/react';

export const CustomTooltip: FC<CustomTooltipProps> = props => {
	return <div className="ag-tooltip custom-tooltip">{props.value}</div>;
};
