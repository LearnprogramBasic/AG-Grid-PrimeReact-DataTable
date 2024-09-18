import { LicenseManager } from 'ag-grid-enterprise';

const agGridLicenseKey = import.meta.env.VITE_AG_GRID_LICENSE_KEY;
LicenseManager.setLicenseKey(agGridLicenseKey);
