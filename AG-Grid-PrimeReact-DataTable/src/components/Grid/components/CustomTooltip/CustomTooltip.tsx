import { FC } from 'react';
import './CustomTooltip.scope.scss';
import { CustomTooltipProps } from '@typings/typingsGrid/types';

export const CustomTooltip: FC<CustomTooltipProps> = props => {
	return <div className="ag-tooltip custom-tooltip">{props.value}</div>;
};
