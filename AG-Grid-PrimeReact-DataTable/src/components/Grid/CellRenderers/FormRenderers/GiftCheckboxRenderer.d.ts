import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
export interface Checkbox {
    label: string;
    value: string;
    checked: boolean;
}
export interface ObsequioCheckboxRendererProps extends ICellRendererParams {
    value: Checkbox[];
    setValue: (value: Checkbox[]) => void;
}
export declare const GiftCheckboxRenderer: FC<ObsequioCheckboxRendererProps>;
