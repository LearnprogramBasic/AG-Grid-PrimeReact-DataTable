import { FC } from 'react';
import { PriceDropdown } from '@components/Grid/components/PriceDropdown/PriceDropdown';
import { CustomCellEditorProps } from '@ag-grid-community/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const PriceDropdownRenderer: FC<CustomCellEditorProps> = ({ value, onValueChange, stopEditing, data }) => {
	const handleValueChange = (newValue: string) => {
		const numericValue = parseInt(newValue.replace('.', ''), 10);
		onValueChange(numericValue);
		stopEditing();
	};

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<PriceDropdown
				icon={<FontAwesomeIcon icon={faChevronDown} />}
				isDropdownVisible={true}
				style={{ lineHeight: '0px' }}
				value={value?.toString() || ''}
				onChange={handleValueChange}
				prices={data.prices || []}
			/>
		</div>
	);
};
