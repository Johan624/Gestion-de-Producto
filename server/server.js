const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Importar la función de conexión
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Conectar a la base de datos
connectDB(); // Llamar a la función connectDB

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal en el servidor' });
});

// Configurar el puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});