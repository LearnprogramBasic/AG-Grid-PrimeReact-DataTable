import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import 'primereact/resources/themes/saga-blue/theme.css';  // Puedes ajustar el tema
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './CustomAutoComplete.css';  // Estilos personalizados

// Definición de la interfaz Product
interface Product {
    codigo: string;
    nombre: string;
    referencia: string;
}

// Definición de la interfaz para el método de autocompletar
interface CompleteMethodParams {
    originalEvent: React.SyntheticEvent;
    query: string;
}

const CustomAutoComplete: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const products: Product[] = [
        { codigo: '000000', nombre: 'Producto genérico', referencia: '000' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        { codigo: '000001', nombre: 'Producto genérico', referencia: '001' },
        // Agrega más productos aquí
    ];

    const searchProducts = (event: CompleteMethodParams) => {
        const query = event.query;
        let _filteredProducts: Product[] = [];

        if (query.length === 0) {
            _filteredProducts = [...products];
        } else {
            _filteredProducts = products.filter((product) => {
                return product.nombre.toLowerCase().includes(query.toLowerCase());
            });
        }

        setFilteredProducts(_filteredProducts);
    };

    return (
        <div className="p-fluid">
            <AutoComplete
                value={selectedProduct}
                suggestions={filteredProducts}
                completeMethod={searchProducts}
                field="nombre"
                dropdown
                onChange={(e) => setSelectedProduct(e.value)}
                placeholder="Producto"
                panelClassName="custom-autocomplete-panel"
                itemTemplate={(item: Product, index) => (
                    <div>
                        {index === 0 && (
                            <div className="product-list-header">
                                <span>Código</span>
                                <span>Nombre</span>
                                <span>Referencia</span>
                            </div>
                        )}
                        <div className="product-list-item">
                            <span>{item.codigo}</span>
                            <span>{item.nombre}</span>
                            <span>{item.referencia}</span>
                        </div>
                    </div>
                )}
            />
            <div className="product-list-footer">
                <a href="#" className="new-item-link">
                    <i className="pi pi-plus"></i> Nuevo ítem
                </a>
            </div>
        </div>
    );
};

export default CustomAutoComplete;
