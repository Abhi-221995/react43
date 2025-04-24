import { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = ({ product }) => {
  const { addToCart } =  useContext(CartContext);

  return (
    <div
      style={{
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
