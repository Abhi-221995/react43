import React from "react";
import Child from "./Child";

const Parent = ({ name }) => {
  return (
    <div>
      <Child name={name} />
    </div>
  );
};

export default Parent;
