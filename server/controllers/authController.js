const User = require('../models/user');
const { generateToken } = require('../config/auth');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { nombre, email, password } = req.body;

  // Verificar si faltan campos
  if (!nombre || !email || !password) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
  }

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const user = new User({ nombre, email, password });
    await user.save();

    // Generar un token
    const token = generateToken(user._id);

    // Enviar respuesta al cliente
    return res.status(201).json({ msg: 'Usuario registrado exitosamente', token });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

// Función para iniciar sesión
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Verificar si faltan campos
  if (!email || !password) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
  }

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    // Validar la contraseña
    const isMatch = await user.comparePassword(password); // Método definido en el modelo
    if (!isMatch) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    // Generar un token
    const token = generateToken(user._id);

    // Enviar respuesta al cliente
    return res.status(200).json({ msg: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

module.exports = { registerUser, loginUser };