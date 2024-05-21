import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";

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

  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Create Category</h1>
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
              required: true,
              message: "Please select product brand!",
            },
          ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            allowClear
          >
            {productCategories.filter(productCategories.parent === null).map((category) => (
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
