import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-100 min-h-screen relative w-[80%] left-[20%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
