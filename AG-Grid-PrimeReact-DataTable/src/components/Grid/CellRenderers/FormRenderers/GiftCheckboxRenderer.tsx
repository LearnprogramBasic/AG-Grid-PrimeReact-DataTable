import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { CheckboxAtom } from '@siigo-arquitectura/checkbox-atom-react';

export interface Checkbox {
	label: string;
	value: string;
	checked: boolean;
}

export interface ObsequioCheckboxRendererProps extends ICellRendererParams {
	value: Checkbox[];
	setValue: (value: Checkbox[]) => void;
}

export const GiftCheckboxRenderer: FC<ObsequioCheckboxRendererProps> = ({ value, setValue }) => {
	const options: Checkbox[] = [{ label: 'Obsequio', value: 'obsequio', checked: value[0]?.checked || false }];

	const handleChange = (checkedOptions: Checkbox[]) => {
		setValue(checkedOptions);
	};

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<CheckboxAtom
				options={options}
				onValueChange={(event: CustomEvent<Checkbox[]>) => {
					const selectedOptions = event.detail;
					handleChange(selectedOptions);
				}}
			/>
		</div>
	);
};
