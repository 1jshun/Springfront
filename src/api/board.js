import api from './axiosinterceptor'

export const boardApi = {
  // 목록: GET /board/list
  getList: () => api.get('/board/list'),
  // 상세: GET /board/read/{idx}
  getRead: (idx) => api.get(`/board/read/${idx}`),
  // 등록: POST /board/reg
  register: (data) => api.post('/board/reg', data),
  // 수정: PUT /board/update/{idx}
  update: (idx, data) => api.put(`/board/update/${idx}`, data),
  // 삭제: DELETE /board/delete/{idx}
  delete: (idx) => api.delete(`/board/delete/${idx}`),
}
