// import React from "react";
// import Parent from "./components/Parent";

// const App = () => {
//   return (
//     <div>
//       <Parent name="John" />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import ProductList from "./ecommerce/ProductList";
import Cart from "./ecommerce/Cart";
import CartSummary from "./ecommerce/CartSummary";

function App() {
  // let cart = []
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping App</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
      <CartSummary cart={cart} />
    </div>
  );
}

export default App;
