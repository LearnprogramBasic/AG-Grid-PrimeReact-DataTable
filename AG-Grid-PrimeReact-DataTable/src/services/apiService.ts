import { RowData } from "../typings/rowDataSchema";

const API_URL = 'https://66b95350fa763ff550f82484.mockapi.io/api/v1/products';

export const fetchProducts = async (): Promise<RowData[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const updateProduct = async (product: RowData): Promise<void> => {
  const response = await fetch(`${API_URL}/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error('Failed to update product');
  }
};

// Puedes agregar más funciones para otras operaciones como crear, eliminar, etc.
