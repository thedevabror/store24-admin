import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ProductService from "../service/product.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandsFailur,
  getBrandsStart,
  getBrandsSucces,
  getCategoryStart,
} from "../app/slice/products";

const { RangePicker } = DatePicker;
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

const CreateProducts = () => {
  const dispatch = useDispatch();
  const { allBrands } = useSelector((state) => state.productCategory);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  //   const [fileList, setFileList] = useState([]);
  useEffect(() => {
    const getCatBrands = async () => {
      dispatch(getBrandsStart());
      dispatch(getCategoryStart())
      try {
        const res = await ProductService.getBrands();
        const respons = await ProductService.getCategories()
        dispatch(getBrandsSucces(res));
        console.log(respons)
      } catch (error) {
        dispatch(getBrandsFailur());
      }
    };
    getCatBrands();
  }, [dispatch]);

  const handleSubmit = (values) => {
    const image = values.ProductImages.fileList;
    console.log(image);
    console.log(values);
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold">Create Product</h1>
      </div>
      <Form {...formItemLayout} variant="filled" onFinish={handleSubmit} form={form}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Desctiption"
          name="desctiption"
          rules={[
            {
              required: true,
              message: "Please enter product desctiption!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please product price!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="Product color"
          name="color"
          rules={[
            {
              required: true,
              message: "Please enter product price!",
            },
          ]}
        >
          <Mentions />
        </Form.Item>

        <Form.Item
          label="Product brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Please select product brand!",
            },
          ]}
        >
          <Select
            // defaultValue={allBrands[0].name}
            style={{
              width: "100%",
            }}
            allowClear
          >
            {allBrands.map((brand) => (
              <Option key={brand._id} value={brand.name}>
                {brand.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Please select product brand!",
            },
          ]}
        >
          <Select
            // defaultValue={allBrands[0].name}
            style={{
              width: "100%",
            }}
            allowClear
          >
            {allBrands.map((brand) => (
              <Option key={brand._id} value={brand.name}>
                {brand.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="DatePicker"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="RangePicker"
          name="RangePicker"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label="Product Images"
          name="ProductImages"
          rules={[
            {
              required: true,
              message: "Please upload product images!",
            },
          ]}
        >
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false}
            multiple
          >
            <Button icon={<UploadOutlined />}>Select Images</Button>
          </Upload>
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

export default CreateProducts;
