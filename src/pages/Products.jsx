import React from "react";
import { useState } from "react";
import "../assets/styles/Products.css";

const ProductsHeader = () => {
  return (
    <div className="product-page-header">
      <h1>Products Page</h1>
    </div>
  );
};

const Products = () => {
  const [products, setproducts] = useState([]);
  return (
    <div>
      <ProductsHeader />
    </div>
  );
};

export default Products;
