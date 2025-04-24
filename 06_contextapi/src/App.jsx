import React from "react";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CartSummary from "./CartSummary";

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>🛍️ React Cart with Context API</h1>
        <div>
          <div>
            <ProductList />
          </div>
          <div>
            <Cart />
            <CartSummary />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
