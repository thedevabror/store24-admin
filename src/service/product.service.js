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
  async createBrand(formData) {
    const { data } = await api.post(`brands`, formData);
    return data;
  },
  async deleteCategory(categoryId) {
    const { data } = await api.delete(`categories/${categoryId}`);
    return data;
  },
  async deleteProduct(id) {
    const { data } = await api.delete(`admin/products/${id}`);
    return data;
  },
  async getSingleProduct(id) {
    const { data } = await api.get(`products/${id}`);
    return data;
  },
  async editProduct(id, formData) {
    const { data } = await api.put(`admin/products/${id}`, formData);
    return data;
  },
  async getTopSellingProducts() {
    const { data } = await api.get(`admin/top-selling-products`);
    return data;
  },
};

export default ProductService;
