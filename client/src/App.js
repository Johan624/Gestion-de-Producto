import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/home';
import LoginForm from './Components/LoginForm';
import Register from './Components/register';
import ProductTable from './Components/ProductTable';

// Componente de Ruta Protegida
const PrivateRoute = ({ element }) => {
  const user = localStorage.getItem('user'); // Verificamos si hay usuario autenticado
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/products"
          element={<PrivateRoute element={<ProductTable />} />} 
        />
      </Routes>
    </div>
  );
};

export default App;

