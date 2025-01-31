import React from "react";
import { useNavigate } from "react-router-dom"; 
import './home.css';
import logo from '../assets/logo.webp';

const Home = () => {
  const navigate = useNavigate();
  document.body.className = "body-home";

  return (
    <nav className="item__nav">
      <img className="diseño_logo" title="Tropifrutas" src={logo} alt="logo" />
      <h1 className="h1_del_home" title="Tropifrutas">Tropifrutas</h1>

      <div className="Boton__contenedor">
        <button className="Direccion__login home_frutas" onClick={() => navigate("/login")}>Login</button>
        <button className="Direccion__registro home_frutas" onClick={() => navigate("/register")}>Registro</button>
      </div>
    </nav>
  );
};

export default Home;
