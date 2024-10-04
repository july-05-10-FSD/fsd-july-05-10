import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import About from "./NavbarComp/About";
import Contact from "./NavbarComp/Contact";
import Service from "./NavbarComp/Service";
import Home from "./NavbarComp/Home";
import Sidebar from "./NavbarComp/Sidebar";
import DashBoard from "./SidebarComp/DashBoard";
import Profile from "./SidebarComp/Profile";
import Register from "./SidebarComp/Register";
import Categories from "./SidebarComp/Categories";
import Setting from "./Setting";
import IndexComponent from "./IndexComponent";
import CounterApp from "./CounterApp";
import ListAndKeys from "./ListAndKeys";

const Routers = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="w-full">
        <Routes>
          //index route
          <Route path="/" element={<IndexComponent />} />
          //nested Routes
          <Route path="/nav" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path="/nav/about" element={<About />} />

            <Route path="/nav/sidebar" element={<Sidebar />}>
              <Route index element={<DashBoard />} />
              <Route path="/nav/sidebar/profile" element={<Profile />} />
              <Route path="/nav/sidebar/register" element={<Register />} />
              <Route path="/nav/sidebar/categories" element={<Categories />} />
            </Route>

            <Route path="/nav/contact" element={<Contact />} />
            <Route path="/nav/service" element={<Service />} />
          </Route>
          //dynamic route
          <Route path="/setting/:sampleid" element={<Setting />} />
          //Normal route
          <Route path="/function" element={<CounterApp />} />
          <Route path="/listkeys" element={<ListAndKeys/>}/>
          //Page not found route
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Routers;
