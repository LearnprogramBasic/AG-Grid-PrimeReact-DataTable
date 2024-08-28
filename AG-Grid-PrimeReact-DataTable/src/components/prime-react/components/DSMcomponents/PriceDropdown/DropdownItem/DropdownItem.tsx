import { FC } from 'react';
import './DropdownItem.scope.scss';
import { DropdownItemProps } from '@/components/Grid/typings';

export const DropdownItem: FC<DropdownItemProps> = ({ label, price, onClick, style }) => {
	return (
		<div className="dropdown-item" onClick={onClick} style={style}>
			<span>{label}</span>
			<span>{price}</span>
		</div>
	);
};
