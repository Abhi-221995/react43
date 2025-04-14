// Components Based Architecture
// 1. Class Components
// 2. Function Components

// Organization : Functional Components, Remove - Class Components

// Virtual DOM - Basic important interview

// state vs props

// State : (Hooks) - useState, useEffect, useReducer etc...

import "./App.css";
// Hooks has to be imported first before use
import { useState } from "react";

const App = () => {
  // variable and setterFunction
  const [count, setCount] = useState(0);

  // Good Practice
  const increment = () => {
    if (count < 20) {
      setCount(count + 5);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 5);
    }
  };

  return (
    <div>
      {/* Counter Application  */}
      {/* whenever you are adding js in html, use {} */}
      <h3>Count : {count} </h3>
      {/* bad Practice  */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
