import { $host, $authHostRefresh, $authHost } from '../utils/api/http';

export default class AuthService {
  static async login(email, password) {
    const response = await $host.post('/signin', {
      email,
      password,
    });
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshtoken', response.data.refreshToken);
    localStorage.setItem('userId', response.data.userId);
    return response;
  }

  static async registration(name, email, password) {
    const response = await $host.post('/users', {
      name,
      email,
      password,
    });

    console.log(response);
    localStorage.setItem('name', response.data.name);
    return response;
  }

  static async check(userId) {
    const response = await $authHost.get(`/users/${userId}`);
    return response;
  }

  static async getNewTokens(userId) {
    const response = await $authHostRefresh.get(`/users/${userId}/tokens`);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshtoken', response.data.refreshToken);
    return response;
  }
}

export const userLogout = () => {
  localStorage.removeItem('name');
  localStorage.removeItem('token');
  localStorage.removeItem('refreshtoken');
  localStorage.removeItem('userId');
};
