import api from "./api";

const AuthService = {
  async adminRegister(user) {
    const { data } = await api.post(`admin/register`, user);
    return data;
  },
  async adminLogin(user) {
    const { data } = await api.post(`admin/login`, user);
    return data;
  },
  async getUsers() {
    const { data } = await api.get(`admin/users`);
    return data;
  },
  async getUsersById(id) {
    const { data } = await api.get(`users/${id}`);
    return data;
  },
};

export default AuthService;
