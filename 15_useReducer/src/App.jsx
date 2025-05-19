import { useReducer } from "react";
import "./App.css";

const App = () => {
  const reducer = (state, action) => {
    // console.log(state, action)
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  // console.log(useReducer(0));

  return (
    // useReducer example
    <>
      <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;
