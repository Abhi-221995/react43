// App.js
import React from "react";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CartSummary from "./CartSummary";

const App = () => {
  return (
    <CartProvider>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center" }}>🛍️ React Cart with Context API</h1>
        <ProductList />
        <Cart />
        <CartSummary />
      </div>
    </CartProvider>
  );
};

export default App;
