import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['x-auth-token'] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post(`${baseUrl}/v1/jwt/refresh`, { refreshToken: refreshToken }).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.accessToken);
          console.log('Access token refreshed!');
          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

const api = {
  signup: (body) => {
    return axios.post(`${baseUrl}/v1/register`, body);
  },
  login: (body) => {
    return axios.post(`${baseUrl}/v1/login`, body);
  },
  refreshToken: (body) => {
    return axios.post(`${baseUrl}/v1/jwt/refresh`, body);
  },
  logout: (body) => {
    return axios.delete(`${baseUrl}/v1/logout`, body);
  },
  test: (body) => {
    return axios.get(`${baseUrl}/v1/employees`, body);
  },
};
export default api;
