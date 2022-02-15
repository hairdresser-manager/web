import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
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
    let accessToken = localStorage.getItem('accessToken');
    if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .post(`${baseUrl}/jwt/refresh`, { accessToken: accessToken, refreshToken: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
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
  loginWithFB: (body) => {
    return axios.post(`${baseUrl}/facebook-auth`, body);
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
  ChangeAccountInformations: (body) => {
    return axios.put(`${baseUrl}/accounts`, body);
  },
  userAppointments: () => {
    return axios.get(`${baseUrl}/appointments`);
  },
  addAppointment: (body) => {
    return axios.post(`${baseUrl}/appointments`, body);
  },
  availableDates: (Employees, ServiceDuration, StartDate, EndDate) => {
    return axios.get(`${baseUrl}/appointments/available-dates`, {
      params: {
        Employees,
        ServiceDuration,
        StartDate,
        EndDate,
      },
    });
  },
  teamMembers: () => {
    return axios.get(`${baseUrl}/offers/team-members`);
  },
  services: () => {
    return axios.get(`${baseUrl}/services`);
  },
  publicServices: () => {
    return axios.get(`${baseUrl}/offers/services`);
  },
  addService: (body) => {
    return axios.post(`${baseUrl}/services`, body);
  },
  addEmployeeToService: (body, id) => {
    return axios.post(`${baseUrl}/services/${id}/employees`, body);
  },
  editService: (body, id) => {
    return axios.put(`${baseUrl}/services/${id}`, body);
  },
  servicesCategories: () => {
    return axios.get(`${baseUrl}/services/categories`);
  },
  changeServicesCategory: (body, id) => {
    return axios.put(`${baseUrl}/services/categories/${id}`, body);
  },
  addServicesCategory: (body) => {
    return axios.post(`${baseUrl}/services/categories/`, body);
  },
  reviews: () => {
    return axios.get(`${baseUrl}/reviews?Page=1&PerPage=5`);
  },
  showEmployees: () => {
    return axios.get(`${baseUrl}/employees`);
  },
  addEmployee: (body) => {
    return axios.post(`${baseUrl}/employees`, body);
  },
  editEmployee: (body, id) => {
    return axios.put(`${baseUrl}/employees/${id}`, body);
  },
  addSchedule: (body, id) => {
    return axios.post(`${baseUrl}/employees/${id}/schedules`, body);
  },
  addScopedSchedule: (body, id) => {
    return axios.post(`${baseUrl}/employees/${id}/scoped-schedules`, body);
  },
  showScheduleById: (id) => {
    return axios.get(`${baseUrl}/employees/${id}/schedules`);
  },
  removeSchedule: (body, id) => {
    return axios.delete(`${baseUrl}/employees/${id}/schedules`, { data: body });
  },
  showSchedule: () => {
    return axios.get(`${baseUrl}/schedules`);
  },
};
export default api;
