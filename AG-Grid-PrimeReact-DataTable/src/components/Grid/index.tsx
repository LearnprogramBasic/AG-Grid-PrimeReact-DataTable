import { FC } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@siigo-arquitectura/ag-grid-theme/dist/ag-theme-siigo.css';
import './index.scoped.scss';
import { columnDefs } from './ColumnDefs';
import { getPinnedBottomRowData, postProcessPopup } from './utils';
import { useGridStore } from '@/services/store/useGridStore';
import { defaultColDef, frameworkComponents } from '@/typings/typingsGrid/types';
import useFilteredRowData from '@/hooks/GridTable/useFilteredRowData';
import { GridReadyEvent } from '@ag-grid-community/core';

const Grid: FC = () => {
	const { rowData, addRow } = useGridStore();
	const filteredRowData = useFilteredRowData();

	// onGridReady callback to auto size columns
	const onGridReady = (params: GridReadyEvent) => {
		params.api.sizeColumnsToFit(); // Ajusta las columnas al tamaño de la grilla
	};

	return (
		<div className="grid-container">
			<div className="ag-theme-siigo " style={{ width: '100%', height: '100%' }}>
				<style>{`
      .ag-theme-siigo .ag-layout-auto-height .ag-center-cols-container,
      .ag-theme-siigo .ag-layout-auto-height .ag-center-cols-viewport {
        min-height: 0 !important;
      }
    `}</style>
				<AgGridReact
					rowData={filteredRowData}
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					pinnedBottomRowData={getPinnedBottomRowData(rowData.length)}
					rowDragManaged={true}
					animateRows={true}
					context={{ addRow }}
					components={frameworkComponents}
					domLayout="autoHeight"
					rowHeight={50}
					postProcessPopup={postProcessPopup}
					onGridReady={onGridReady}
					suppressNoRowsOverlay={true}
					getRowClass={params => {
						return params.node.rowPinned === 'bottom' ? 'pinned-bottom-row' : '';
					}}
				/>
			</div>
		</div>
	);
};

export default Grid;
