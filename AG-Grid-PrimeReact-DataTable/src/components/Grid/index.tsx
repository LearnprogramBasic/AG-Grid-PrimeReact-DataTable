import { FC } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ColDef } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@siigo-arquitectura/ag-grid-theme/dist/ag-theme-siigo.css';
import './index.scoped.scss';
import { useGridStore } from './store/useGridStore';
import { useFilteredRowData } from './hooks/useFilteredRowData';
import { CustomTooltip } from './components';
import { columnDefs } from './ColumnDefs';
import { getPinnedBottomRowData, postProcessPopup } from './utils';

const defaultColDef: ColDef = {
	sortable: true,
	filter: false,
	resizable: true,
	editable: true,
	minWidth: 150,
	flex: 1,
	tooltipComponent: 'customTooltip',
};

const Grid: FC = () => {
	const { rowData, addRow } = useGridStore();
	const filteredRowData = useFilteredRowData();

	return (
		<div className="grid-container">
			<div className="ag-theme-siigo" style={{ width: '100%', height: '400px' }}>
				<AgGridReact
					rowData={filteredRowData}
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					pinnedBottomRowData={getPinnedBottomRowData(rowData.length)}
					rowDragManaged={true}
					animateRows={true}
					context={{ addRow }}
					postProcessPopup={postProcessPopup}
					components={{
						customTooltip: CustomTooltip,
					}}
				/>
			</div>
		</div>
	);
};

export default Grid;
