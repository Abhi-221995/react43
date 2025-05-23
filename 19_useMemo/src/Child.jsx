import React from "react";

const Child = ({ expensiveCal }) => {
  console.log("child component rendered");
  return (
    <>
      <h4>{expensiveCal}</h4>
    </>
  );
};

export default React.memo(Child);
// export default Child;
