import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { useNavigate } from "react-router-dom";
import ProductTable from "../../Components/ProductTable";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button onClick={() => navigate("/add-product")}>Agregar Producto</button>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
