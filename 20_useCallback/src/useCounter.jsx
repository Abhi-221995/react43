import React, { useState } from "react";

const useCounter = (initialVal) => {
  const [count, setCount] = useState(initialVal);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;
