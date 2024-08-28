import { FC } from 'react';
import { ButtonAtom } from '@siigo-arquitectura/button-atom-react';

export interface CustomButtonAtomProps {
	id?: string; // Identificador único para el botón
	color?: 'primary-blue' | 'primary-green' | 'secondary' | 'tertiary'; // Color del botón
	text?: string; // Texto que se mostrará en el botón
	onClick: () => void; // Función que se ejecutará al hacer clic en el botón
	disabled?: boolean; // Indica si el botón está deshabilitado
}

export const CustomButtonAtom: FC<CustomButtonAtomProps> = ({ id, color, text, onClick, disabled }) => {
	return (
		<div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
			<ButtonAtom id={id} color={color} text={text} onClick={onClick} disabled={disabled} />
		</div>
	);
};
