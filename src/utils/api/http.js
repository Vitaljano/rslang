import axios from 'axios';

export const API_URL = 'https://react-learn-words-app.herokuapp.com';
export const USER_ID = localStorage.getItem('userId');

const $host = axios.create({
  baseURL: API_URL,
});

const $authHost = axios.create({
  baseURL: API_URL,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const $authHostRefresh = axios.create({
  baseURL: API_URL,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};
const authRefInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(
    'refreshtoken'
  )}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
$authHostRefresh.interceptors.request.use(authRefInterceptor);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = (await $authHostRefresh.get)(
          `${API_URL}/users/${USER_ID}/tokens`
        );
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return $authHost.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  }
);

export { $host, $authHost, $authHostRefresh };
