import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/board',
      name: 'boardList',
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/board/write',
      name: 'boardWrite',
      component: () => import('../views/BoardWrite.vue'),
    },
    {
      path: '/board/:idx',
      name: 'boardDetail',
      component: () => import('../views/BoardDetail.vue'),
    },
    {
      path: '/board/edit/:idx',
      name: 'boardEdit',
      component: () => import('../views/BoardWrite.vue'),
    },
  ],
})

export default router
