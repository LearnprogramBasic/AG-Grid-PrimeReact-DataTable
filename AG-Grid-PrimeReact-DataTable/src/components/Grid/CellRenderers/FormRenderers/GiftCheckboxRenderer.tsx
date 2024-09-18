import { FC } from 'react';
import { CheckboxAtom } from '@siigo-arquitectura/checkbox-atom-react';
import { Checkbox, giftCheckboxRendererProps } from '@typings/typingsGrid/types';
import '@components/Grid/CellRenderers/Style/cell-renderer-common.scoped.scss';

export const GiftCheckboxRenderer: FC<giftCheckboxRendererProps> = ({ value, setValue }) => {
	const options: Checkbox[] = [{ label: 'Obsequio', value: 'obsequio', checked: value[0]?.checked || false }];

	const handleChange = (checkedOptions: Checkbox[]) => {
		setValue(checkedOptions);
	};

	return (
		<div className="shared-renderer-styles">
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
