import React from "react";
import SidebarMenuComp from "../SidebarComp/SidebarMenuComp";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex p-4">
      <SidebarMenuComp />
      <div className="flex-1 h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
