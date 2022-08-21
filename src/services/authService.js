import { $host, $authHost } from '../utils/api/http';

export default class AuthService {
  static async login(email, password) {
    const response = await $host.post('/signin', {
      email,
      password,
    });
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshtoken', response.data.refreshToken);
    return response;
  }

  static async registration(name, email, password) {
    const response = await $host.post('/users', {
      name,
      email,
      password,
    });
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshtoken', response.data.refreshToken);
    return response;
  }

  static async logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshtoken');
    return $host.post('/');
  }
  static async check(userId) {
    const response = await $authHost.get(`/users/${userId}/tokens`);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshtoken', response.data.refreshToken);
    return response;
  }
}
