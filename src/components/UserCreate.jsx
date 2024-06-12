import { Button, Form, Input, message } from "antd";
import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import AuthService from "../service/auth.service";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();
  const handleAdd = async (values) => {
    // console.log(values)

    try {
      const response = await AuthService.createUser(values);
      console.log(response);
      message.success("Mijoz yaratildi!");
      setTimeout(() => {
        navigate("/dashboard/user");
      }, 2000);
    } catch (error) {
      message.error("Xatolik, keyinroq urunib ko'ring");
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Mijoz qo'shish</h1>
      </div>
      <div className="max-w-2xl w-full m-auto py-5">
        <Form
          layout="vertical"
          requiredMark="optional"
          autoComplete="off"
          onFinish={handleAdd}
          //   className="flex flex-col justify-center items-center"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Mijoz ismini kiriting!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              className="w-full h-[50px]"
              placeholder="Ism"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Mijoz emailni kiriting!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              className="w-full h-[50px]"
              placeholder="Email"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Mijoz parolini kiriting!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              className="w-full h-[50px]"
              placeholder="Parol"
              autoComplete="new-password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="h-[50px] text-lg"
            >
              Kiritish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserCreate;
