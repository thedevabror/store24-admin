import React, { useEffect, useState } from "react";
import OrderService from "../service/order.service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersFailur,
  getOrdersStart,
  getOrdersSucces,
} from "../app/slice/order";
import AuthService from "../service/auth.service";

const Orders = () => {
  const dispatch = useDispatch();
  const { allOrders } = useSelector((state) => state.orders);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const getOrders = async () => {
      dispatch(getOrdersStart());
      try {
        const response = await OrderService.getOrders();
        dispatch(getOrdersSucces(response));

        // Fetch user details for each order
        const userIds = response.map((order) => order.userId);
        const uniqueUserIds = [...new Set(userIds)];
        const userDetailsPromises = uniqueUserIds.map((id) =>
          AuthService.getUsersById(id)
        );
        const userDetailsArray = await Promise.all(userDetailsPromises);

        const userDetailsMap = userDetailsArray.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});

        setUserDetails(userDetailsMap);
      } catch (error) {
        dispatch(getOrdersFailur());
        console.log(error);
      }
    };

    getOrders();
  }, [dispatch]);

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">All Orders</h1>
        <Link
          to={"create"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + New Order
        </Link>
      </div>
      <div className="p-4 border rounded-md grid grid-cols-4 gap-2">
        {allOrders.map((item) => {
          const user = userDetails[item.userId];
          return (
            <div className="p-4 border rounded-md" key={item._id}>
              <h1>Order by: {user ? user.name : item.userId}</h1>
              <h1>
                Status:{" "}
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === "pending"
                      ? "bg-yellow-100 text-yellow-500"
                      : item.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.status}
                </span>
              </h1>
              <div>
                {item.products.map((orders, index) => (
                  <h1 key={index}>Products quantity: {orders.quantity}</h1>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
