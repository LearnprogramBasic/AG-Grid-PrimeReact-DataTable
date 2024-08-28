import { FC, useState } from 'react';
import './PriceDropdown.scope.scss';
import { DropdownList } from './DropdownList/DropdownList';
import { PriceDropdownProps } from '../../typings';

export const PriceDropdown: FC<PriceDropdownProps> = ({ icon, isDropdownVisible = true, style, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		if (isDropdownVisible) {
			setIsOpen(!isOpen);
		}
	};

	const handleSelectPrice = (price: string) => {
		onChange(price);
		setIsOpen(false);
	};

	return (
		<div className="price-dropdown" style={style}>
			<input type="text" value={value} readOnly className="input" style={style} />
			<button type="button" onClick={toggleDropdown} className="button">
				{icon}
			</button>
			{isOpen && isDropdownVisible && <DropdownList onSelectPrice={handleSelectPrice} />}
		</div>
	);
};
