import React from "react";

const ChildComp = ({ btnName, handleFunc }) => {
  return (
    <button
      className="px-4 py-1.5 bg-blue-500 rounded text-white"
      onClick={handleFunc}
    >
      {btnName}
    </button>
  );
};

export default ChildComp;

export const ButtonComp2 = ({ props }) => {
  const { handleFunc, btnName } = props;

  return (
    <button
      className="px-4 py-1.5 bg-blue-500 rounded text-white"
      onClick={handleFunc}
    >
      {btnName}
    </button>
  );
};
