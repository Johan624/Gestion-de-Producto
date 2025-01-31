const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
// const authMiddleware = require('../middleware/authMiddleware'); // Comentamos el middleware temporalmente

const router = express.Router();

// Rutas sin autenticación (para pruebas)
router.post('/', createProduct);  // Crear producto
router.get('/', getProducts);     // Obtener productos
router.put('/:id', updateProduct); // Actualizar producto
router.delete('/:id', deleteProduct); // Eliminar producto

module.exports = router;

