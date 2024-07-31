import React, { FC, useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importa el tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Importa los estilos de PrimeReact
import './ProductTable.scss'; // Importa tus estilos personalizados

interface Product {
    codigo: string;
    nombre: string;
    referencia: string;
}

const ProductTable: FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { codigo: '000001', nombre: 'Producto premium', referencia: '001' },
        { codigo: '000002', nombre: 'Producto genérico', referencia: '002' },
        // Agrega más productos según sea necesario
    ]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target as Node) &&
                inputRef.current && 
                !inputRef.current.contains(event.target as Node)
            ) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const searchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        const _filteredProducts = products.filter(product => 
            product.nombre.toLowerCase().includes(query) || 
            product.codigo.includes(query) || 
            product.referencia.includes(query)
        );

        setFilteredProducts(_filteredProducts);
        setDropdownVisible(_filteredProducts.length > 0);
    };

    const handleSelect = (product: Product) => {
        setSelectedProduct(product);
        setDropdownVisible(false);
        if (inputRef.current) {
            inputRef.current.value = product.nombre;
        }
    };

    const itemTemplate = (product: Product) => (
        <div className="autocomplete-item" onClick={() => handleSelect(product)}>
            <div className="autocomplete-cell">{product.codigo}</div>
            <div className="autocomplete-cell">{product.nombre}</div>
            <div className="autocomplete-cell">{product.referencia}</div>
        </div>
    );

    return (
        <div className="autocomplete-table" ref={dropdownRef}>
            <input 
                ref={inputRef}
                type="text"
                placeholder="Producto"
                onChange={searchProducts}
                onClick={() => setDropdownVisible(filteredProducts.length > 0)}
            />
            <div className={`autocomplete-dropdown ${dropdownVisible ? 'active' : ''}`}>
                <div className="autocomplete-header">
                    <div className="autocomplete-cell">Código</div>
                    <div className="autocomplete-cell">Nombre</div>
                    <div className="autocomplete-cell">Referencia</div>
                </div>
                <div className="autocomplete-items">
                    {filteredProducts.map((product, index) => (
                        <div key={index}>
                            {itemTemplate(product)}
                        </div>
                    ))}
                </div>
                <div className="autocomplete-footer">
                    <Button label="Nuevo ítem" icon="pi pi-plus" />
                </div>
            </div>
        </div>
    );
}

export default ProductTable;
