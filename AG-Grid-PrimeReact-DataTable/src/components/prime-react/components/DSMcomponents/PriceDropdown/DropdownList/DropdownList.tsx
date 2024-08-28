import { FC } from 'react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import './DropdownList.scope.scss';

import { prices } from '../Mock/Mock';
import { DropdownListProps } from '@/components/Grid/typings';

export const DropdownList: FC<DropdownListProps> = ({
	onSelectPrice,
	listTitle = 'Lista',
	priceTitle = 'Precio (COP)',
}) => {
	return (
		<div className="dropdown-list">
			<div className="dropdown-header">
				<span>{listTitle}</span>
				<span>{priceTitle}</span>
			</div>
			{prices.map((item, index) => (
				<DropdownItem
					key={index}
					label={item.label}
					price={item.price}
					onClick={() => onSelectPrice(item.price)}
				/>
			))}
		</div>
	);
};
