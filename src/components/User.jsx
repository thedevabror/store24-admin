import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import AuthService from "../service/auth.service";
import { Link } from "react-router-dom";
import { Spin, message } from "antd";
import { useDispatch } from "react-redux";
import { getUserStart, getUserSucces } from "../app/slice/auth";

const User = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      dispatch(getUserStart());
      setLoading(true);
      try {
        const response = await AuthService.getUsers();
        setUsers(response);
        dispatch(getUserSucces());
      } catch (error) {
        message.error("Xatolik, iltimos qayta urunib ko'ring!");
        console.log(error);
      }
    };

    getUsers();
  }, [dispatch]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="px-3 md:px-10 flex flex-col gap-10">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Mijozlar</h1>
          <Link
            to={"/dashboard/create/user"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            + Yangi mijoz
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  <input type="checkbox" />
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Ismi
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Vazifasi
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Holati
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center ">
                      <span className="w-10 h-10 rounded-full mr-4 text-center flex items-center justify-center text-2xl font-bold border">
                        {user.name.slice(0, 1)}
                      </span>
                      <div>
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      {user.isAdmin ? "Admin" : "User"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.isActive ? "Faol" : "Bloklangan"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">Rows per page:</div>
          <div className="text-sm text-gray-600">1-5 of 24</div>
          <div className="flex">
            <button className="text-sm text-gray-600 mx-1">&lt;</button>
            <button className="text-sm text-gray-600 mx-1">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
