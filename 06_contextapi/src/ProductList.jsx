import React from "react";
import Product from "./Product";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 3, name: "Tablet", price: 300 },
  ];

  return (
    <div>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
        Products
      </h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
