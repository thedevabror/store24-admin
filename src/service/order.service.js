import api from "./api";

const OrderService = {
  async getOrders() {
    const { data } = await api.get(`orders`);
    return data;
  },
  async getOrderById(id) {
    const { data } = await api.get(`orders/details/${id}`);
    return data;
  },
  async deleteOrder(orderId) {
    const { data } = await api.delete(`orders/${orderId}`);
    return data;
  },
  async updateOrderStatus(order) {
    const { data } = await api.put(`orders/update-order-status`, order);
    return data;
  },
};

export default OrderService;
