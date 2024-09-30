import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const NavData = [
    { pathName: "/nav", title: "Home" },
    { pathName: "/nav/sidebar", title: "Sidebar" },
    { pathName: "/nav/about", title: "About" },
    { pathName: "/nav/contact", title: "Contact" },
    { pathName: "/nav/service", title: "Service" },
  ];

  return (
    <nav className="w-full h-20 flex justify-evenly items-center bg-blue-100">
      {NavData.map((val, index) => (
        <span
          key={index}
          className={`${
            location.pathname === val.pathName
              ? "bg-green-500 px-4 py-1.5 text-white rounded"
              : "bg-blue-500 px-4 py-1.5 text-white rounded"
          }`}
        >
          <Link to={val.pathName}>{val.title}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
