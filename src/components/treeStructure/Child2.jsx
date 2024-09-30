import React from "react";

const GreatGrandChild1 = () => {
  return <h1>Great Grand Child 1</h1>;
};

const GreatGrandChild2 = () => {
  return <h1>Great Grand Child 2</h1>;
};

const GrandChild2 = () => {
  return (
    <div>
      <h1>Grand Child 2</h1>
      <GreatGrandChild1 />
      <GreatGrandChild2 />
    </div>
  );
};

const Child2 = () => {
  return (
    <div>
      <h1>Child2</h1>
      <GrandChild2 />
    </div>
  );
};

export default Child2;
