import { FC } from 'react';
import { ProductSearchAutocomplete } from '@siigo-siigonube/product-search-autocomplete-ui';
import '@components/Grid/CellRenderers/Style/cell-renderer-common.scoped.scss';

const ProductAutocompleteRenderer: FC = () => {
	return (
		<div
			className="product-autocomplete-renderer"
			// style={{ padding: '13px 8px 4px', backgroundColor: 'var(--border-200)' }}
		>
			<ProductSearchAutocomplete />
		</div>
	);
};

export default ProductAutocompleteRenderer;
