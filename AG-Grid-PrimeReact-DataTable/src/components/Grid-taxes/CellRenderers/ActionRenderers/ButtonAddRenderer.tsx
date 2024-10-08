import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { ButtonAtom } from '@siigo-arquitectura/button-atom-react';
import { useGridStore } from '@/services/store/useGridStore';

export const ButtonAddRenderer: FC<ICellRendererParams> = () => {
	const addRow = useGridStore(state => state.addRow);

	const handleAddRow = () => {
		addRow();

		const { rowData, agGridApi } = useGridStore.getState();
		if (agGridApi) {
			// Usa una transacción para agregar los datos a la grid
			agGridApi.applyTransaction({ add: rowData.slice(-1) });
		}
	};

	return (
		<div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
			<ButtonAtom id="btnAddRow" color="tertiary" text="Agregar fila" onClick={handleAddRow} />
		</div>
	);
};
