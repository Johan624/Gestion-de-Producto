// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa tus estilos globales
import App from './App'; // Importamos el componente App
import { BrowserRouter as Router } from 'react-router-dom'; // Para habilitar el enrutamiento

ReactDOM.render(
  <Router> 
    <App />
  </Router>,
  document.getElementById('root')
);

