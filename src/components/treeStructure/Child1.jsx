import React from "react";

const GrandChild1 = () => {
  return <h1>Grand Child 1</h1>;
};

const Child1 = () => {
  return (
    <div>
      <h1>Child1</h1>
      <GrandChild1 />
    </div>
  );
};

export default Child1;
