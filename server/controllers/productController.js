const Product = require('../models/product');

// Crear un producto
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    
    console.log('Datos recibidos en el backend:', { name, price, description, category, stock }); // Log para depuración

    if (!name || !price || !description || !category || stock === undefined) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
    }

    if (isNaN(stock) || stock < 0) {
      return res.status(400).json({ msg: 'El stock debe ser un número positivo' });
    }

    const product = new Product({ name, price, description, category, stock });
    await product.save();

    console.log('Producto guardado en la base de datos:', product); // Log para depuración

    res.status(201).json({ msg: 'Producto creado', product: product.toObject() });
  } catch (error) {
    console.error('Error al crear el producto:', error); // Log para depuración
    res.status(500).json({ msg: 'Error al crear el producto', error: error.message });
  }
};

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Productos encontrados en la base de datos:', products); // Log para depuración
    res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error); // Log para depuración
    res.status(500).json({ msg: 'Error al obtener los productos', error: error.message });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    
    const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }
    
    res.json({ msg: 'Producto actualizado', product });
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }
    
    res.json({ msg: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar el producto', error });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };