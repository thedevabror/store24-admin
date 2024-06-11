import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderService from "../service/order.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleOrderFailur,
  getSingleOrderStart,
  getSingleOrderSucces,
} from "../app/slice/order";
import { Spin } from "antd";
import AuthService from "../service/auth.service";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const { isLoading, singleOrder } = useSelector((state) => state.orders);

  useEffect(() => {
    const getOrder = async () => {
      dispatch(getSingleOrderStart());
      try {
        const response = await OrderService.getOrderById(id);
        dispatch(getSingleOrderSucces(response));
        console.log(response);
      } catch (error) {
        dispatch(getSingleOrderFailur());
        console.log(error);
      }
    };

    getOrder();

    const getUser = async () => {
      // dispatch(getUs)
      try {
        const response = await AuthService.getUsersById(singleOrder.userId);
        // console.log(response);
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [dispatch, id, singleOrder.userId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      {singleOrder && Object.keys(singleOrder).length > 0 ? (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              {singleOrder.createdAt}
            </p>
          </div>
          <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  Mijozning buyurtmalari
                </p>
                <div className="mt-4 md:mt-6 flex  flex-col justify-start items-start gap-5 md:items-center w-full ">
                  {singleOrder?.products?.map((item) => {
                    if (!item?.productId) {
                      return (
                        <div
                          className="flex items-center justify-center w-full"
                          key={item?._id || Math.random()}
                        >
                          <h1 className="text-xl">Maxsulot topilmadi (internet xatosi yoki maxsulot o'chirilgan) :(</h1>
                        </div>
                      );
                    }
                    return (
                      <div
                        className="border-b pb-3 md:flex-row flex-col flex justify-between items- w-full gap-5"
                        key={item?.productId?._id}
                      >
                        <div className="w-full md:w-60">
                          <img
                            className="w-full rounded-md"
                            src={`https://abrorkhandev.uz/public/${item?.productId?.images[0].slice(
                              8
                            )}`}
                            alt="product"
                          />
                        </div>
                        <Link
                          to={`/dashboard/product/${item?.productId?._id}`}
                          className="w-full flex flex-col justify-start items-start space-y-8"
                        >
                          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                            {item?.productId?.name}
                          </h3>
                        </Link>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base xl:text-lg leading-6">
                            ${item?.productId?.price}
                          </p>
                          <p className="text-base xl:text-lg leading-6 text-gray-800">
                            {item?.quantity} ta
                          </p>
                          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                            ${singleOrder?.totalPrice}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between  w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        ${singleOrder?.totalPrice}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-4 text-gray-600">$3.00</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                      $36.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Mijoz
              </h3>
              <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                <div className="flex flex-col justify-start items-start flex-shrink-0">
                  <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                    {/* <img
                      src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                      alt="avatar"
                    /> */}
                    <div className=" flex justify-start items-start flex-col space-y-2">
                      <p className="text-base font-semibold leading-4 text-left text-gray-800">
                        {user?.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="cursor-pointer text-sm leading-5 text-gray-800">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                  <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                      <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                        Manzili
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <h1>
                          Ko'cha: <span>{user?.address?.street}</span>
                        </h1>
                        <h1>
                          Shahar: <span>{user?.address?.city}</span>
                        </h1>
                        <h1>
                          Davlat: <span>{user?.address?.state}</span>
                        </h1>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-xl">Buyurtma topilmadi :(</h1>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
