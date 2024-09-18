import { FC } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@siigo-arquitectura/ag-grid-theme/dist/ag-theme-siigo.css';
import './index.scoped.scss';
import { columnDefs } from './ColumnDefs';
import { getPinnedBottomRowData } from './utils';
import { useGridStore } from '@/services/store/useGridStore';
import { defaultColDef, frameworkComponents } from '@/components/Grid/props.type';
import { rowData as mockRowData } from './MockData/rowData';
import '../Grid/ModuleRegistry/agGridSetup';

const Grid: FC = () => {
	const { rowData, addRow } = useGridStore(); // Asegúrate de que useGridStore tenga rowData

	return (
		<div className="grid-container">
			<div className="ag-theme-siigo data-edit" style={{ width: '100%', height: 'auto' }}>
				<AgGridReact
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					rowData={rowData || mockRowData}
					pinnedBottomRowData={getPinnedBottomRowData(rowData || mockRowData)}
					suppressNoRowsOverlay={true} // Oculta "No Rows To Show"
					animateRows={true}
					context={{ addRow }}
					components={frameworkComponents}
					domLayout="autoHeight"
					getRowClass={params => {
						return params.node.rowPinned === 'bottom' ? 'pinned-bottom-row' : '';
					}}
				/>
			</div>
		</div>
	);
};

export default Grid;
