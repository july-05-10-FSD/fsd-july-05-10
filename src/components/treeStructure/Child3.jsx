import React from "react";

const GrandChild3 = () => {
  return (
    <div>
      <h1>Grand Child 3</h1>
    </div>
  );
};

const GrandChild4 = () => {
  return (
    <div>
      <h1>Grand Child 4</h1>
    </div>
  );
};

const Child3 = () => {
  return (
    <div>
      <h1>Child3</h1>
      <GrandChild3 />
      <GrandChild4 />
    </div>
  );
};

export default Child3;
