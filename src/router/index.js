import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Translate',
    component : () => import('../views/Main.vue')

  },
  {
    path: '/about',
    name: 'About',
    component : () => import('../views/About.vue')

  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
