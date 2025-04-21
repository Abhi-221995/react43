import { useEffect, useState } from "react";

const HelloComponent = () => {
  // useEffect(function, dependency)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   nothing and []

  // mapping
  return (
    <div>
      <h1>Hello data</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HelloComponent;
