import { FC } from 'react';
import { PriceDropdown } from '../../components/PriceDropdown/PriceDropdown';
import { CustomCellEditorProps } from '@ag-grid-community/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PriceActionButtonRenderer: FC<CustomCellEditorProps> = props => {
	const { value, data } = props;
	const icon = faPlus;
	const isDropdownVisible = false;

	const handleValueChange = (newValue: string) => {
		console.log('Nuevo valor:', newValue);
		// Lógica adicional para manejar el nuevo valor si es necesario
	};

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<PriceDropdown
				icon={<FontAwesomeIcon icon={icon} />}
				isDropdownVisible={isDropdownVisible}
				style={{ lineHeight: '0px' }}
				value={value?.toString() || ''}
				onChange={handleValueChange}
				prices={data?.prices || []}
			/>
		</div>
	);
};
