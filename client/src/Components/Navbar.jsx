import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Productos</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrarse</Link>
        </nav>
    );
};

export default Navbar;
