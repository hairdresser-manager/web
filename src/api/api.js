import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

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
      return axios.post(`${baseUrl}/jwt/refresh`, { refreshToken: refreshToken }).then((res) => {
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
    return axios.post(`${baseUrl}/register`, body);
  },
  verifyEmail: (body) => {
    return axios.post(`${baseUrl}/register/verify-email`, body);
  },
  login: (body) => {
    return axios.post(`${baseUrl}/login`, body);
  },
  refreshToken: (body) => {
    return axios.post(`${baseUrl}/jwt/refresh`, body);
  },
  logout: (body) => {
    return axios.delete(`${baseUrl}/logout`, body);
  },
  changePassword: (body) => {
    return axios.post(`${baseUrl}/accounts/change-password`, body);
  },
};
export default api;