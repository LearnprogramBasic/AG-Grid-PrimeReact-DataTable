import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { DropdownListSingleItem } from '@siigo-arquitectura/dropdown-content-atom';
import { tipoOptions } from '../../MockData/rowData';
import { CustomSelect } from '../../components';

export const TipoSelectRenderer: FC<ICellRendererParams> = props => {
	const handleTipoChange = (selectedItems: DropdownListSingleItem[]) => {
		const selectedTipo = selectedItems[0] || null;

		// Verifica si setValue está definido antes de invocarlo
		if (props.setValue) {
			props.setValue(selectedTipo); // Actualiza el valor en la tabla
		} else {
			console.error('setValue is not defined in the renderer params.');
		}
	};

	return (
		<div
			style={{
				padding: '7px',
				backgroundColor: 'var(--border-200)',
				width: '210px',
			}}
		>
			<CustomSelect
				label="Tipo"
				options={tipoOptions}
				value={props.value}
				onChange={handleTipoChange}
				disabled={false}
				required={true}
			/>
		</div>
	);
};
