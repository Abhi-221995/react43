import Comp from "./comp";

function App() {
  return (
    <div>
      <Comp product="Charger" price={20000} />
      <Comp product="Mobile" price={3000} />
      <Comp product="TV" price={60000} />
      <Comp product="Tablets" price={10000} />
    </div>
  );
}

export default App;

// Components
// 1. Component name should start with Uppercase letter
// 2. Component is just a function get returns, export and get imported
// 3. Component always return a single element
