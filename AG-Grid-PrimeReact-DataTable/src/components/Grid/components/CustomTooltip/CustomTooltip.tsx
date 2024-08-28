import { FC } from 'react';
import { ITooltipParams } from '@ag-grid-community/core';
import './CustomTooltip.scope.scss';

export const CustomTooltip: FC<ITooltipParams> = props => {
	return <div className="ag-tooltip custom-tooltip">{props.value}</div>;
};
