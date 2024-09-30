import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={`/setting/${3456}`}>Dynamic Route</Link>
    </div>
  );
};

export default Home;
