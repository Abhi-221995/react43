import React from "react";

function Product({ product, addToCart }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
