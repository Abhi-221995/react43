import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ name }) => {
  return (
    <div>
      <GrandChild name={name}></GrandChild>
    </div>
  );
};

export default Child;
