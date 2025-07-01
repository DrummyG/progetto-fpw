import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useSessionStore } from '../stores/session.js' 
import * as Auth from '../utils/auth.js'; 



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Progetto
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false}
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      meta: { requiresAuth: true}
    },
    {
      path: '/insert',
      name: 'insert',
      component: () => import('../views/InsertView.vue'),
      meta: { requiresAuth: true}
    },
    {
      path: '/who',
      name: 'who',
      component: () => import('../views/WhoView.vue'),
      meta: { requiresAuth: false}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false}
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true}
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('../views/SubscribeView.vue'),
      meta: { requiresAuth: false}
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const sessionStore = useSessionStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const userId = sessionStore.getUser();
    const data = await Auth.isLogged();
    if(userId === null || userId !== data.userId) {
      next({ 
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }else {
      next();
    }
  }else {
    next();
  }
});






export default router
