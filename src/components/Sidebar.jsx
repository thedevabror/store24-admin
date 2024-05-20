import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaProductHunt, FaBlogger, FaSignInAlt, FaChartBar, FaChartPie } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <Link to="/" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaChartBar className="mr-3" /> Dashboard
        </Link>
        <Link to="/user" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaUser className="mr-3" /> User
        </Link>
        <Link to="/product" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaProductHunt className="mr-3" /> Product
        </Link>
        <Link to="/blog" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaBlogger className="mr-3" /> Blog
        </Link>
        <Link to="/login" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaSignInAlt className="mr-3" /> Login
        </Link>
        <Link to="/notfound" className="flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
          <FaChartPie className="mr-3" /> Not Found
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
