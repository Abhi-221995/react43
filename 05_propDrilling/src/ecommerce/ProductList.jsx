import React from "react";
import Product from "./Product";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Charger", price: 150 },
    { id: 5, name: "TV", price: 150 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
