// Cart.js
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
        Cart Items
      </h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            🛒 {item.name} - ${item.price}
          </p>
        ))
      )}
    </div>
  );
};

export default Cart;
