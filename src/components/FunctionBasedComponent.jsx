import { useState } from "react";

function FuncBasedComp() {
  const [count, setCount] = useState(0);

  // Destructuring

  // Array and object

  // const objData = {
  //   name: "vicky",
  //   age: 24,
  //   email: "vicky@gmail.com",
  //   obj: { id: 1, obj2: { data: "test" } },
  // };

  // const { name, age, email: emailId, obj } = objData;

  // console.log(emailId);

  // const arryData = ["test", { data: "Vicky" }, 24, true];

  // const [name, _, __, boolean] = arryData;

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 100);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 10);
  };

  return (
    <div>
      <p className="text-center mb-5 text-4xl font-bold">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-1.5 rounded bg-blue-200"
        >
          Decrement
        </button>
        <button
          onClick={handleIncrement}
          className="px-4 py-1.5 rounded bg-green-200"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default FuncBasedComp;
