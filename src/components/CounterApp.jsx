import React from "react";
import { Link, useLocation } from "react-router-dom";

const Count = ({ count }) => {
  return <p className="text-center mb-5">Counter {count}</p>;
};

const ButtonComp = ({ btnName, handleFunction }) => {
  return (
    <button
      onClick={handleFunction}
      className="px-4 py-1.5 bg-green-500 rounded text-white"
    >
      {btnName}
    </button>
  );
};

const CounterApp = () => {
  const [count, setCount] = React.useState(0);

  const location = useLocation();

  // if (!location.state) {
  //   return (
  //     <div>
  //       Something went wrong! <Link to={"/nav"}>Navigate to Home</Link>
  //     </div>
  //   );
  // }

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <Count count={count} />
      <p>{location.state ? location.state : "There are no data"}</p>
      <div className="flex gap-3">
        <ButtonComp btnName={"Decrement"} handleFunction={handleDecrement} />
        <ButtonComp btnName={"Reset"} handleFunction={handleReset} />
        <ButtonComp btnName={"Increment"} handleFunction={handleIncrement} />
      </div>
    </div>
  );
};

export default CounterApp;
