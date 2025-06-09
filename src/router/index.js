import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/portfolio',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: 'showcase',
          name: 'showcase',
          component: () => import('../views/ShowcaseView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/portfolio/profile'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/portfolio/profile')
  } else {
    next()
  }
})

export default router 