import React from "react";

function CartSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
    </div>
  );
}

export default CartSummary;
