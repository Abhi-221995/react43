import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
        Cart Summary
      </h2>
      <p>
        <strong>Total Items:</strong>{" "}
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </p>
      <p>
        <strong>Total Price:</strong> ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default CartSummary;
