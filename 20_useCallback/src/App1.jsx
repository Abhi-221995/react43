// import "./App.css";
// import { useCallback, useState } from "react";
// import ChildComponent from "./ChildComponent";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount((count) => count + 1);
//   }, []);

//   return (
//     <>
//       <button onClick={handleClick}>count is {count}</button>

//       <br />
//       <br />
//       <div>
//         <ChildComponent name="something" handleClick={handleClick} />
//       </div>
//     </>
//   );
// }

// export default App;

import useToggle from "./useToggle";
const App = () => {
  const [value, toggleValue] = useToggle(false);
  const [data, loadData] = useToggle(false);

  console.log("--val", value);

  return (
    <>
      <div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(false)}>Hide</button>
        <button onClick={() => toggleValue(true)}>Show</button>

        {value ? <h1>Custom Hooks</h1> : null}
      </div>

      <div>
        <button onClick={loadData}>Toggle</button>
        <button onClick={() => loadData(false)}>Hide</button>
        <button onClick={() => loadData(true)}>Show</button>

        {data ? <h1>Used custom hook again</h1> : null}
      </div>
    </>
  );
};

export default App;
