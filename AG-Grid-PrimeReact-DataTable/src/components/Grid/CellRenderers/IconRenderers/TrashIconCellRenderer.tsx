import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
// import './TrashIcon.scope.scss';
import { ButtonIconAtom } from '@siigo-arquitectura/button-icon-atom-react';
import { TrashIconCellRendererProps, ButtonIconAtomProps } from '../../typings';

export const TrashIconCellRenderer: FC<ICellRendererParams & TrashIconCellRendererProps & ButtonIconAtomProps> = ({
	node,
	api,
	onClick,
	icon = 'fas fa-trash',
	size = 'm',
	color = 'tertiary',
}) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (api && node) {
			api.applyTransaction({ remove: [node.data] });
		}
	};

	return (
		<div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
			<ButtonIconAtom icon={icon} size={size} color={color} onClick={handleClick} />
		</div>
	);
};
