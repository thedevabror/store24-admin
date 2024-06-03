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
  async getUsersById(userId) {
    const { data } = await api.get(`users/${userId}`);
    return data;
  },
  async createUser(values) {
    const { data } = await api.post(`users/register`, values);
    return data
  }
};

export default AuthService;
