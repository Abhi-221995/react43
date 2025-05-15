// Cart.js
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
        Cart Items
      </h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity}
            </div>
            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <button
                onClick={() => increaseQty(item.id)}
                style={{ margin: "0 8px" }}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
