import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { DropdownListSingleItem } from '@siigo-arquitectura/dropdown-content-atom';
import { impuestoOptions } from '../../MockData/rowData';
import { CustomSelect } from '../../components';

export const ImpuestoSelectRenderer: FC<ICellRendererParams> = props => {
	const selectedTipo = props.data.tipo;

	const handleImpuestoChange = (selectedItems: DropdownListSingleItem[]) => {
		const selectedImpuesto = selectedItems[0] || null;

		// Verifica si setValue está definido antes de invocarlo
		if (props.setValue) {
			props.setValue(selectedImpuesto); // Actualiza el valor en la tabla
		} else {
			console.error('setValue is not defined in the renderer params.');
		}
	};

	// Solo muestra las opciones si el tipo es válido
	const impuestoSelectOptions = impuestoOptions[selectedTipo as keyof typeof impuestoOptions] || [];

	return (
		<div
			style={{
				padding: '7px',
				backgroundColor: 'var(--border-200)',
				width: '210px',
			}}
		>
			<CustomSelect
				label="Impuesto"
				options={impuestoSelectOptions}
				value={props.value}
				onChange={handleImpuestoChange}
				disabled={!selectedTipo}
				required={true}
			/>
		</div>
	);
};
