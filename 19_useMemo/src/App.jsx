import "./App.css";
import { useMemo, useState } from "react";
import Child from "./Child";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const expensiveCal = useMemo(() => {
    console.log("expensiveCal");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * add;
  }, [add]);

  return (
    <>
      <h4>{expensiveCal}</h4>
      <button onClick={() => setAdd(add + 1)}>Add</button> {add}
      <button onClick={() => setMinus(minus - 1)}>Minus</button> {minus}
      <Child expensiveCal={expensiveCal} />
    </>
  );
}

export default App;
