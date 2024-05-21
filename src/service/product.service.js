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
    return data
  },
};

export default ProductService;
