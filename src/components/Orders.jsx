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
  const [id, setId] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const getOrders = async () => {
      dispatch(getOrdersStart());
      try {
        const response = await OrderService.getOrders();
        dispatch(getOrdersSucces(response));
        const res = await AuthService.getUsersById(id);
        console.log(res);
      } catch (error) {
        dispatch(getOrdersFailur());
        console.log(error);
      }
    };

    getOrders();
  }, []);

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
          // setId(item.userId);
          return (
            <div className="p-4 border rounded-md" key={item._id}>
              <h1>Order by: {item.userId}</h1>
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
                {item.products.map((orders) => (
                  <>
                    <h1>Products quantity: {orders.quantity}</h1>
                  </>
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
