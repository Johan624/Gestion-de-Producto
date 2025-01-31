import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../services/authService';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password); // Asegúrate de pasar las credenciales correctas
    
            console.log(response); // Para depuración
    
            // Verificar si la respuesta es exitosa y contiene el usuario
            if (response.success && response.data) { 
                localStorage.setItem('user', JSON.stringify(response.data)); // Guardar el usuario (response.data)
                localStorage.setItem('token', response.data.token); // Asegúrate de guardar el token también
                navigate('/products'); // Redirige a la página de productos
            } else {
                alert('Credenciales incorrectas'); // Notificar al usuario
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error); // Log del error
            alert('Error al iniciar sesión'); // Mostrar mensaje de error genérico
        }
    };
    
    
    // Agregar una clase específica al body
    document.body.className = "login-body";


return (
    <div className='home-container'>
        <div className='login'>
        <form onSubmit={handleLogin}>
            <h1 className='titulo'>Ingresa a Nuestro Mercado de Fruta</h1>
            <div className='input-box'>
                <FaUser className='icon' />
                <input 
                type="email" 
                placeholder='Correo Electronico' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className='input-box'>
                <FaLock className='icon' />
                <input 
                type='password' 
                placeholder='Contraseña' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <div className="remember">
                <label><input className='check' type='checkbox' />Recordar</label>
                <a className='olvide' href='/forgot-password'>olvido la contraseña?</a>
            </div>
            <button className='botonlogin' type="submit">Login</button>
            <div className='Registrar'>
                <p>Crear Cuenta <Link className="registrar" to="/register">Registrarse</Link></p>
            </div>
        </form>
    </div>
</div>
    )
}

export default LoginForm
