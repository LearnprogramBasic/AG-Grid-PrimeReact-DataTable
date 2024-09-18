import { FC } from 'react';
import { DropdownItem } from '@components/Grid/components/PriceDropdown/DropdownItem/DropdownItem';
import './DropdownList.scope.scss';
import { DropdownListProps } from '@typings/typingsGrid/types';

export const DropdownList: FC<DropdownListProps> = ({
	onSelectPrice,
	prices,
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
