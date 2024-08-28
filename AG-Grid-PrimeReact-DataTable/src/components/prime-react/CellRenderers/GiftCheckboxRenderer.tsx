import { FC } from 'react';
import { Checkbox, ObsequioCheckboxRendererProps } from '../typings';
import { CustomCheckboxAtom } from '../components';

export const GiftCheckboxRenderer: FC<ObsequioCheckboxRendererProps> = ({ value, setValue }) => {
	const options: Checkbox[] = [{ label: 'Obsequio', value: 'obsequio', checked: value[0]?.checked || false }];

	const handleChange = (checkedOptions: Checkbox[]) => {
		setValue(checkedOptions);
	};

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<CustomCheckboxAtom options={options} onChange={handleChange} />
		</div>
	);
};
