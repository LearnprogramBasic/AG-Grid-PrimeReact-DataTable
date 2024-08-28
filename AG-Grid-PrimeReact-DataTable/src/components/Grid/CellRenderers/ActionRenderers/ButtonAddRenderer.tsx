import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { ButtonAtom } from '@siigo-arquitectura/button-atom-react';
import { useGridStore } from '../../store/useGridStore';

export const ButtonAddRenderer: FC<ICellRendererParams> = () => {
	const addRow = useGridStore(state => state.addRow);

	const handleAddRow = () => {
		console.log('Adding a row');
		addRow();
	};

	return (
		<div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
			<ButtonAtom id="btnAddRow" color="tertiary" text="Agregar fila" onClick={handleAddRow} />
		</div>
	);
};
