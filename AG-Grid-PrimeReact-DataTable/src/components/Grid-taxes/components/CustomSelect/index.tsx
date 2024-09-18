import React from 'react';
import { SelectAtom } from '@siigo-arquitectura/select-atom-react';
import { DropdownListSingleItem } from '@siigo-arquitectura/dropdown-content-atom';

interface CustomSelectProps {
	label: string;
	options: DropdownListSingleItem[];
	value: DropdownListSingleItem | DropdownListSingleItem[] | null;
	onChange: (selectedItems: DropdownListSingleItem[]) => void;
	disabled?: boolean;
	required?: boolean;
	multiSelect?: boolean;
	showHint?: boolean; // Nueva prop para controlar si el hint se muestra
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
	label,
	options,
	value,
	onChange,
	disabled = false,
	required = false,
	multiSelect = false,
	showHint = false, // Controlar si se muestra el hint
}) => {
	// Función para manejar el evento `changeData` correctamente
	const handleChange = (event: CustomEvent<DropdownListSingleItem[]>) => {
		onChange(event.detail);
	};

	return (
		<div>
			<SelectAtom
				label={label}
				options={options}
				value={value}
				onChange={event => handleChange(event as unknown as CustomEvent<DropdownListSingleItem[]>)}
				disabledSelect={disabled}
				required={required}
				multiSelect={multiSelect}
				showFooter={false}
				hint={showHint ? 'Este es un hint opcional' : ''}
				errorMessage={''}
			/>
		</div>
	);
};
