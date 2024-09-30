import React from "react";
import { Link } from "react-router-dom";

const SidebarMenuComp = () => {
  return (
    <div className="w-32 h-full flex flex-col gap-5">
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/sidebar"}>DashBoard</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/sidebar/profile"}>Profile</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/sidebar/register"}>Register</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/sidebar/categories"}>Categories</Link>
      </span>
    </div>
  );
};

export default SidebarMenuComp;
