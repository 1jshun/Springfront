import api from './axiosinterceptor'

export const userApi = {
  signup: (data) => api.post('/user/signup', data),
  login: (data) => api.post('/login', data),
}
