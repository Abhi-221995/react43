import { useState, Suspense, lazy } from "react";
// import User from "./User";
const User = lazy(() => import("./User"));

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <h2>Lazy Loading</h2>
      {load ? (
        <Suspense fallback={<h3>loading...</h3>}>
          <User />
        </Suspense>
      ) : // <User />
      null}
      <button onClick={() => setLoad(true)}>Load Data</button>
    </>
  );
};

export default App;
