/* eslint-disable no-param-reassign */
import axios from 'axios';
import { IToken } from '../context/AuthProvider/types';

export const api = axios.create({
  baseURL: 'http://192.168.200.253:8080/api/',
});

api.interceptors.request.use(
  config => {
    const tokenLocal = localStorage.getItem('user');

    if (tokenLocal) {
      const token = JSON.parse(tokenLocal) as IToken;

      config.headers = {
        Authorization: `Bearer ${token.access_token}`,
      };
    }

    return config;
  },
  error => {
    localStorage.removeItem('user');
    return Promise.reject(error);
  },
);
