import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductService from "../service/product.service";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const CreateCategry = () => {
  const { productCategories } = useSelector((state) => state.productCategory);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await ProductService.createCategory(values);
      console.log(response)
      navigate("/dashboard/categories");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Create Category</h1>
        <Link
          to={"/dashboard/categories"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </Link>
      </div>
      <Form
        {...formItemLayout}
        variant="filled"
        onFinish={handleSubmit}
        form={form}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter category name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category parent"
          name="parent"
          rules={[
            {
              required: false,
              message: "Please select category parent!",
            },
          ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            allowClear
          >
            {productCategories
              .filter((item) => item.parent === null)
              .map((category) => (
                <Option key={category._id} value={category._id}>
                  {category.name}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCategry;
