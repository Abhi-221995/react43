function Comp(props) {

  return (
    // Component name should always start with Uppercase letter
    <div>
      <h3>Product : {props.product} </h3>
      <p>Price : {props.price}</p>
    </div>
  );
}

export default Comp;

// destructuring
// function Comp({ product, price }) {
//   return (
//     // Component name should always start with Uppercase letter
//     <div>
//       <h3>Product : {product} </h3>
//       <p>Price : {price}</p>
//     </div>
//   );
// }

//context Api and protoTypes

export default Comp;
