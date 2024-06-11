import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Upload,
} from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import ProductService from "../service/product.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandsFailur,
  getBrandsStart,
  getBrandsSucces,
  getCategoryFailur,
  getCategoryStart,
  getCategorySucces,
} from "../app/slice/products";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
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

const CreateProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allBrands } = useSelector((state) => state.productCategory);
  const { productCategories } = useSelector((state) => state.productCategory);
  const [attributes, setAttributes] = useState([{ name: "", value: "" }]);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const getCatBrands = async () => {
      dispatch(getBrandsStart());
      dispatch(getCategoryStart());
      try {
        const res = await ProductService.getBrands();
        const respons = await ProductService.getCategories();
        dispatch(getBrandsSucces(res));
        dispatch(getCategorySucces(respons));
      } catch (error) {
        dispatch(getBrandsFailur());
        dispatch(getCategoryFailur());
      }
    };
    getCatBrands();
  }, [dispatch]);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("brand", values.brand);
    formData.append("color", values.color);
    formData.append("attributes", JSON.stringify(attributes)); // Adjust attributes if needed
    formData.append("stock", values.stock);

    fileList.forEach((file) => {
      formData.append("images", file.originFileObj);
    });

    try {
      const response = await ProductService.createProduct(formData);
      console.log(response);
      navigate("/dashboard/product");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-10)); // Limit to 10 files
  };

  const addAttribute = () => {
    setAttributes([...attributes, { name: "", value: "" }]);
  };

  const removeAttribute = (index) => {
    const newAttributes = attributes.slice();
    newAttributes.splice(index, 1);
    setAttributes(newAttributes);
  };

  const handleAttributeChange = (index, field, value) => {
    const newAttributes = [...attributes];
    newAttributes[index][field] = value;
    setAttributes(newAttributes);
  };

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold">Create Product</h1>
      </div>
      <Form {...formItemLayout} form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            { required: true, message: "Please enter product description!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: "Please enter product price!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Product Color"
          name="color"
          rules={[{ required: true, message: "Please enter product color!" }]}
        >
          <Mentions />
        </Form.Item>

        <Form.Item label="Product Attributes">
          {attributes.map((attribute, index) => (
            <div key={index} style={{ display: "flex", marginBottom: 8 }}>
              <Input
                placeholder="Name"
                value={attribute.name}
                onChange={(e) =>
                  handleAttributeChange(index, "name", e.target.value)
                }
                style={{ marginRight: 8 }}
              />
              <Input
                placeholder="Value"
                value={attribute.value}
                onChange={(e) =>
                  handleAttributeChange(index, "value", e.target.value)
                }
                style={{ marginRight: 8 }}
              />
              <MinusCircleOutlined onClick={() => removeAttribute(index)} />
            </div>
          ))}
          <Button type="dashed" onClick={addAttribute} icon={<PlusOutlined />}>
            Add Attribute
          </Button>
        </Form.Item>

        <Form.Item
          label="Product Brand"
          name="brand"
          rules={[{ required: true, message: "Please select product brand!" }]}
        >
          <Select style={{ width: "100%" }} allowClear>
            {allBrands.map((brand) => (
              <Option key={brand._id} value={brand._id}>
                {brand.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            { required: true, message: "Please select product category!" },
          ]}
        >
          <Select style={{ width: "100%" }} allowClear>
            {productCategories
              .filter((item) => item.parent !== null)
              .map((category) => (
                <Option key={category._id} value={category._id}>
                  {category.name}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Maxsulot soni"
          name="stock"
          rules={[{ required: true, message: "Maxsulot sonini kiriting!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Product Images"
          name="images"
          rules={[{ required: true, message: "Please upload product images!" }]}
        >
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 10)</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProducts;
