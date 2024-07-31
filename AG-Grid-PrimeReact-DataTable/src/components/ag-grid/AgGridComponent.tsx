import React, { FC } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { columnDefs, rowData } from './data/data';
import CustomCellEditor from './components/CustomHeader';


const AgGridComponent: FC = () => {
  return (
    <div className="table-container ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        components={{
          customCellEditor: CustomCellEditor
        }}
      />
    </div>
  );
};

export default AgGridComponent;
