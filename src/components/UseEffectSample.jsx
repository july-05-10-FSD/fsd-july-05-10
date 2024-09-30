import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseEffectSample = () => {
  const [state, setState] = useState([]);

  //   useEffect(() => {
  //     console.log("This UseEffect will trigger everytime");
  //   });

  //Component did mount

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  // component did update

  useEffect(() => {
    console.log("Component did update");
  }, [state]);

  //component will unmount

  useEffect(() => {

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  console.log("component render");

  return (
    <div>
      <button onClick={() => setState([])}>TRIGGER</button>
      <Link></Link>
    </div>
  );
};

export default UseEffectSample;
