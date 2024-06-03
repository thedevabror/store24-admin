import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  Button, message, Modal, Select, Form, Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import OrderService from "../service/order.service";
import AuthService from "../service/auth.service";
import {
  getOrdersFailur,
  getOrdersStart,
  getOrdersSucces,
} from "../app/slice/order";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Orders = () => {
  const dispatch = useDispatch();
  const { allOrders } = useSelector((state) => state.orders);
  const [userDetails, setUserDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [orderId, setOrderId] = useState("");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      dispatch(getOrdersStart());
      setLoading(true);
      try {
        const response = await OrderService.getOrders();
        dispatch(getOrdersSucces(response));

        // Fetch user details for each order
        const userIds = response.map((order) => order.userId);
        const uniqueUserIds = [...new Set(userIds)];
        const userDetailsPromises = uniqueUserIds.map((userId) =>
          AuthService.getUsersById(userId)
        );
        const userDetailsArray = await Promise.all(userDetailsPromises);

        const userDetailsMap = userDetailsArray.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});

        setUserDetails(userDetailsMap);
      } catch (error) {
        dispatch(getOrdersFailur());
        message.error("Xatolik, iltimos qayta urunib ko'ring!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [dispatch]);

  const handleEdit = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
    console.log("Edit order:", orderId);
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await OrderService.deleteOrder(orderId);
      console.log(response);
      dispatch(
        getOrdersSucces(allOrders.filter((order) => order._id !== orderId))
      );
      message.success("Order deleted successfully");
    } catch (error) {
      message.error("Failed to delete order");
      console.log(error);
    }
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    const order = {
      orderId: selectedOrderId,
      status: values.status,
    };
    try {
      //
      const response = await OrderService.updateOrderStatus(order);
      dispatch(
        getOrdersSucces(
          allOrders.map((order) =>
            order._id === selectedOrderId ? response : order
          )
        )
      );
      console.log(response);
      message.success("Order status updated successfully");
    } catch (error) {
      message.error("Failed to update order status");
      console.log(error);
    } finally {
      setIsModalOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-2">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Buyurtmalar</h1>
        </div>
        <div className="p-4 border rounded-md grid grid-cols-4 gap-2">
          {allOrders?.map((item) => {
            const user = userDetails[item.userId];
            return (
              <div
                className="relative p-4 border rounded-md hover:bg-gray-100"
                key={item._id}
              >
                <Link to={item._id} className="block">
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
                </Link>
                <div className="absolute top-[70%] right-2 group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(item._id)}
                    className="mr-2"
                  />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item._id)}
                    danger
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        title="Edit Order"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form {...formItemLayout} form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Order Status"
            name="status"
            rules={[{ required: true, message: "Please select order status!" }]}
          >
            <Select
              style={{ width: "100%" }}
              allowClear
              options={[
                { value: "completed", label: "Completed" },
                { value: "cancelled", label: "Cancelled" },
              ]}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Orders;
