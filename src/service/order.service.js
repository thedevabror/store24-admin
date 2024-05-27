import api from "./api";

const OrderService = {
  async getOrders() {
    const { data } = await api.get(`orders`);
    return data;
  },
};

export default OrderService
