import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MobileBar from "./MobileBar";

const Layout = () => {
  return (
    <div className="flex min-[200px]:flex-col md:flex-row">
      <Sidebar />
      <MobileBar />
      <div className="flex-1 flex flex-col">
        {/* <Header /> */}
        <div className="px-2 py-20 bg-gray-100 min-h-screen relative md:w-[80%] md:left-[20%] min-[400px]:w-full min-[400px]:left-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
