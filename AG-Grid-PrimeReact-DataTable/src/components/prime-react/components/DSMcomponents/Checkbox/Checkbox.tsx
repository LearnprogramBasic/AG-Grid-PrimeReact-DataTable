import { FC } from 'react';
import { CheckboxAtom } from '@siigo-arquitectura/checkbox-atom-react';
import { Checkbox, CustomCheckboxAtomProps } from '../../typings';

export const CustomCheckboxAtom: FC<CustomCheckboxAtomProps> = ({ options, onChange }) => {
	return (
		<CheckboxAtom
			options={options}
			onValueChange={(event: CustomEvent<Checkbox[]>) => {
				const selectedOptions = event.detail;
				onChange(selectedOptions);
			}}
		/>
	);
};
