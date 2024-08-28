import { LicenseManager } from '@ag-grid-enterprise/core';

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { CsvExportModule } from '@ag-grid-community/csv-export';

const agGridLicenseKey = import.meta.env.VITE_AG_GRID_LICENSE_KEY;
LicenseManager.setLicenseKey(agGridLicenseKey);

ModuleRegistry.registerModules([
	// CsvExportModule,
	ClientSideRowModelModule,
]);