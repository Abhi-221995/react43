import useCounter from "./useCounter";

const App = () => {
  const { count, increment, decrement } = useCounter(1);
  return (
    <>
      <div>
        <button onClick={increment}>+</button>
        <h4>{count}</h4>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default App;
