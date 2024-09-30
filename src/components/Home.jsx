import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const FooterComp = () => {
  return <div className="w-full h-32 bg-yellow-100"></div>;
};

const Home = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      <Navbar />
      <div className="flex-1 w-full h-full">
        <Outlet />
      </div>
      <FooterComp />
    </div>
  );
};

export default Home;
