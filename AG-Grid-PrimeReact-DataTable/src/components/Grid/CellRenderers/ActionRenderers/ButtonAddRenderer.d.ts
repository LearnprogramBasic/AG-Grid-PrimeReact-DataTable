import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
export interface CustomButtonAtomProps {
    id?: string;
    color?: 'primary-blue' | 'primary-green' | 'secondary' | 'tertiary';
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const ButtonAddRenderer: FC<ICellRendererParams & CustomButtonAtomProps>;
