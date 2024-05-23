import api from "./api";

const ProductService = {
  async getProducts() {
    const { data } = await api.get(`admin/products`);
    return data;
  },
  async getBrands() {
    const { data } = await api.get(`brands`);
    return data;
  },
  async getCategories() {
    const { data } = await api.get(`categories`);
    return data;
  },
  async createCategory(values) {
    const { data } = await api.post(`categories/category`, values);
    return data;
  },
  async createProduct(formData) {
    const { data } = await api.post(`admin/products`, formData);
    return data;
  },
};

export default ProductService;
