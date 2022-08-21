import axios from 'axios';

export const API_URL = 'https://react-learn-words-app.herokuapp.com';

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
    'refreshToken'
  )}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
$authHostRefresh.interceptors.request.use(authRefInterceptor);
export { $host, $authHost, $authHostRefresh };
