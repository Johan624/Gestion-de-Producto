import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService'; // Importar el servicio
import './ProductTable.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Obtener productos al cargar el componente
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };
        fetchProducts();
    }, []);

    // Agregar producto
    const handleCreate = () => {
        setEditingProduct(null);
        setShowForm(true);
    };

    // Editar producto
    const handleEdit = (product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    // Eliminar producto
    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            // Recargar productos después de eliminar
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    // Enviar formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            category: e.target.category.value,
            stock: e.target.stock.value,
        };

        try {
            if (editingProduct) {
                // Actualizar producto
                await updateProduct(editingProduct._id, productData);
            } else {
                // Crear producto
                await addProduct(productData);
            }
            // Recargar productos después de agregar o editar
            const data = await getProducts();
            setProducts(data);
            setShowForm(false); // Ocultar formulario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div>
            <h2>Listado de Productos</h2>
            <button onClick={handleCreate}>Agregar Producto</button>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Editar</button>
                                <button onClick={() => handleDelete(product._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mostrar formulario */}
            {showForm && (
                <form className='formp' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre del producto"
                        defaultValue={editingProduct ? editingProduct.name : ''}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Descripción"
                        defaultValue={editingProduct ? editingProduct.description : ''}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Precio"
                        defaultValue={editingProduct ? editingProduct.price : ''}
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Categoría"
                        defaultValue={editingProduct ? editingProduct.category : ''}
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="Cantidad en inventario"
                        defaultValue={editingProduct ? editingProduct.stock : ''}
                        required
                    />
                    <button className='BotonProducto' type="submit">
                        {editingProduct ? 'Actualizar' : 'Agregar'} Producto
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductPage;
