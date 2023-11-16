import axios from 'axios';
import { BASE_URL, TIME_OUT } from '@/config/baseURL';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
