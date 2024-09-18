import { AutoComplete } from 'primereact/autocomplete';
import { useState } from 'react';

interface Product {
    id: string;
    code: string;
    name: string;
    reference: string;
    price: number;
}

const AutoCompleteWithDropdown: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [products] = useState<Product[]>([
        { id: '1', code: '000000', name: 'Producto genérico', reference: '000', price: 100 },
        { id: '2', code: '000000', name: 'Producto genérico', reference: '000', price: 200 },
        { id: '3', code: '000000', name: 'Producto genérico', reference: '000', price: 300 },
    ]);

    const searchProduct = (event: { query: string }) => {
        const query = event.query.toLowerCase();
        setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query)));
    };

    const renderHeader = () => (
        <div className="dropdown-header">
            <div className="product-code">Código</div>
            <div className="product-name">Nombre</div>
            <div className="product-reference">Referencia</div>
        </div>
    );

    const renderFooter = () => (
        <div className="dropdown-footer">
            <button className="add-item-button">+ Agregar Item</button>
        </div>
    );

    return (
        <AutoComplete
            value={selectedProduct}
            suggestions={filteredProducts}
            completeMethod={searchProduct}
            field="name"
            onChange={(e) => setSelectedProduct(e.value)}
            dropdown={true}
            panelClassName="custom-autocomplete-panel"
            itemTemplate={(item, index) => (
                <div>
                    {index === 0 && renderHeader()}
                    <div className="product-item">
                        <div className="product-code">{item.code}</div>
                        <div className="product-name">{item.name}</div>
                        <div className="product-reference">{item.reference}</div>
                    </div>
                    {index === filteredProducts.length - 1 && renderFooter()}
                </div>
            )}
        />
    );
};

export default AutoCompleteWithDropdown;
