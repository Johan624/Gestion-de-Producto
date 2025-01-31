import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products/';

// Obtener todos los productos
export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Productos obtenidos:', response.data); // Log para depuración
        return response.data;
    } catch (error) {
        console.error('Error en getProducts:', error); // Log para depuración
        throw error; // Propagar el error para manejarlo en el componente
    }
};

// Agregar un producto
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(API_URL, productData);
        console.log('Producto creado:', response.data); // Log para depuración
        return response.data;
    } catch (error) {
        console.error('Error en addProduct:', error); // Log para depuración
        throw error; // Propagar el error para manejarlo en el componente
    }
};

// Actualizar un producto
export const updateProduct = async (id, productData) => {
    try {
        const response = await axios.put(`${API_URL}${id}`, productData);
        console.log('Producto actualizado:', response.data); // Log para depuración
        return response.data;
    } catch (error) {
        console.error('Error en updateProduct:', error); // Log para depuración
        throw error; // Propagar el error para manejarlo en el componente
    }
};

// Eliminar un producto
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${id}`);
        console.log('Producto eliminado:', response.data); // Log para depuración
        return response.data;
    } catch (error) {
        console.error('Error en deleteProduct:', error); // Log para depuración
        throw error; // Propagar el error para manejarlo en el componente
    }
};
