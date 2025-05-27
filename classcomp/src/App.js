import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <Counter name="Sharat" />
      </div>
    </>
  );
};

export default App;
