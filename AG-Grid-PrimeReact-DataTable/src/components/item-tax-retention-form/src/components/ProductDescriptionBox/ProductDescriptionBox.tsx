import { FC } from 'react';
import './ProductDescriptionBox.scope.scss';

interface ProductDescriptionBoxProps {
	productCode: string;
	description: string;
}

export const ProductDescriptionBox: FC<ProductDescriptionBoxProps> = ({ productCode, description }) => {
	return (
		<div className="product-description-wrapper">
			<div className="product-description-content">
				<div className="product">
					<strong>Producto:</strong>
					<span> {productCode}</span>
				</div>
				<span className="divider" />
				<div className="description">
					<strong>Descripción:</strong>
					<span> {description}</span>
				</div>
			</div>
		</div>
	);
};
