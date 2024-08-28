import { FC } from 'react';
import './TrashIcon.scope.scss';
import { ButtonIconAtom } from '@siigo-arquitectura/button-icon-atom-react';
import { ButtonIconAtomProps } from '../../typings';

export const TrashIcon: FC<ButtonIconAtomProps> = ({ onClick, icon, size, color }) => {
	return (
		<div className="trash-icon-container">
			<ButtonIconAtom icon={icon} size={size} color={color} onClick={onClick} />
		</div>
	);
};
