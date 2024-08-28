import { FC, useCallback } from 'react';
import { PriceDropdown } from '../components/DSMcomponents/PriceDropdown/PriceDropdown';
import { CustomCellEditorProps } from '@ag-grid-community/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const PriceDropdownRenderer: FC<CustomCellEditorProps> = ({ value, onValueChange = () => {}, stopEditing }) => {
	// `onValueChange` tiene un valor predeterminado para evitar errores.

	const handleValueChange = useCallback(
		(newValue: string) => {
			const numericValue = parseInt(newValue.replace('.', ''), 10);
			onValueChange(numericValue); // Aquí se utiliza `onValueChange`, ya sea el proporcionado o el predeterminado.
			stopEditing();
		},
		[onValueChange, stopEditing]
	);

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<PriceDropdown
				icon={<FontAwesomeIcon icon={faChevronDown} />}
				isDropdownVisible={true}
				style={{ lineHeight: '0px' }}
				value={value?.toString() || ''}
				onChange={handleValueChange}
			/>
		</div>
	);
};
