import React from "react";
import { NavLink } from "react-router-dom";
import { Brand, Categories, Dashboard, Orders, Products, Users } from "../utils/svg";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Store24
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-[20%] hidden md:block h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Dashboard />
                <span className="ms-3">Asosiy</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"user"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Users />
                <span className="flex-1 ms-3 whitespace-nowrap">Mijozlar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"product"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Products />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Maxsulotlar
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"create"}
                className="flex items-center p-2 text-blue-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaPlus className="text-blue-600" />
                <span className="flex-1 ms-3 whitespace-nowrap text-blue-600">
                  Yaratish
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"orders"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Orders />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Buyurtmalar
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Categories />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Kategoriyalar
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="brand"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Brand />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Brendlar
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
