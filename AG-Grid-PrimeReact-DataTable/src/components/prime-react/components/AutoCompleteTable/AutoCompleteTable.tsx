import { FC, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./AutoCompleteTable.scss";
import { mockProducts } from "../../data/productData";

// Define la estructura del Producto
export interface Product {
  codigo: string;
  nombre: string;
  referencia: string;
  descripcionCorta: string;
  valorUnitario: number;
  bodega: string;
  vendedor: string;
  tercero: string;
}

// Simulando una respuesta del backend con los productos


const AutoCompleteWithTable: FC = () => {
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  // Filtra los productos basados en la entrada del usuario
  const searchItem = (event: { query: string }) => {
    const query = event.query.toLowerCase();
    const filtered = mockProducts.filter((item) =>
      item.nombre.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
    setShowTable(true); // Mostrar la tabla cuando hay resultados
  };

  // Maneja la selección de un producto desde la tabla
  const onRowSelect = (item: Product) => {
    setSelectedItem(item);
    setQuery(item.nombre); // Actualiza el campo de autocompletar con el nombre del ítem seleccionado
    setShowTable(false); // Oculta la tabla al seleccionar un ítem
  };

  // Maneja el cambio en el campo de autocompletar
  const handleAutoCompleteChange = (e: any) => {
    const newValue = e.value;
    setQuery(newValue);
    setSelectedItem(null); // Resetea el valor seleccionado si se empieza a escribir algo nuevo
    searchItem({ query: newValue }); // Realiza la búsqueda cada vez que cambie el valor

    if (!newValue) {
      setShowTable(false); // Oculta la tabla si el campo está vacío
    }
  };

  return (
    <div className="autocomplete-with-table-container">
      <AutoComplete
        value={query} // Mostrar el valor de `query` en el campo de autocompletar
        onChange={handleAutoCompleteChange}
        placeholder="Buscar producto"
        dropdown={false}
        forceSelection={true}
        className="autocomplete-input"
      />

      {showTable && filteredItems.length > 0 && (
        <div className="autocomplete-custom-dropdown">
          <DataTable
            value={filteredItems}
            selectionMode="single"
            onRowClick={(e) => onRowSelect(e.data as Product)}
            scrollable
            scrollHeight="200px"
          >
            <Column field="codigo" header="Código" />
            <Column field="nombre" header="Nombre" />
            <Column field="referencia" header="Referencia" />
          </DataTable>
          <div className="new-item-footer">
            <a href="#newItem">+ Nuevo ítem</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteWithTable;
