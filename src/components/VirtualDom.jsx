import React, { useState } from "react";

const ListComp = ({ val, id, setData }) => {
  return (
    <h1
      onClick={() =>
        setData((prevState) => prevState.filter((val, index) => index !== id))
      }
    >
      {val}
    </h1>
  );
};

const VirtualDom = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData((prevData) => [...prevData, text]);
    setText("");
  };

  return (
    <div>
      <div>
        <input
          placeholder="Enter text here"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {data.map((val, id) => (
          <ListComp val={val} key={id} id={id} setData={setData} />
        ))}
      </div>
    </div>
  );
};

export default VirtualDom;
