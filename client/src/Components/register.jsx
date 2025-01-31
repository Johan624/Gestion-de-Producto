import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser as RegisterService } from "../services/authService"; // Cambié esto para que coincida con la exportación de authService.js
import './register.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("register-body");
    return () => {
      document.body.classList.remove("register-body");
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!nombre) {
      setError('El nombre es obligatorio');
      return;
    }
    if (!email) {
      setError('El correo es obligatorio');
      return;
    }
    if (!password) {
      setError('La contraseña es obligatoria');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('El correo electrónico no es válido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await RegisterService(nombre, email, password); // Usé registerUser como RegisterService
      if (result.success) {
        navigate('/login');
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError('Error al registrar el usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contenedor_registro">
      <h2 className="titulo_registro">Registro</h2>
      <form className="form_registro" onSubmit={handleRegister}>
        <label className="label_registro" htmlFor="nombre">Nombre:</label>
        <input
          className='input_registro'
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
        <label className="label_registro" htmlFor="email">Correo:</label>
        <input
          className='input_registro'
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="label_registro" htmlFor="password">Contraseña:</label>
        <input
          className='input_registro'
          type="password"
          id="password"
          name="password"
          placeholder="Crea tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button className="Boton_registro" type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
};

export default Register;
