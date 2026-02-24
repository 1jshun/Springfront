import api from './axiosinterceptor'

export const boardApi = {
  // 게시글 목록 조회
  getList: () => api.get('/board/list'),
  // 게시글 상세 조회
  getRead: (idx) => api.get(`/board/read/${idx}`),
  // 게시글 작성
  register: (data) => api.post('/board/reg', data),
  // 게시글 수정
  update: (idx, data) => api.put(`/board/update/${idx}`, data),
  // 게시글 삭제
  delete: (idx) => api.delete(`/board/delete/${idx}`),
}
