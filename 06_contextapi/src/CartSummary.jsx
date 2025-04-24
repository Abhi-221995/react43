// CartSummary.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
        Summary
      </h2>
      <p>
        <strong>Total Items:</strong> {cart.length}
      </p>
      <p>
        <strong>Total Price:</strong> ${total}
      </p>
    </div>
  );
};

export default CartSummary;
