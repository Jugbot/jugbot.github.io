import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogView from '../views/BlogView.vue'

import { blogs } from '../blogs'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blogs',
      component: BlogListView
    },
    {
      strict: true,
      path: '/blog/',
      name: 'blog',
      component: BlogView,
      children: blogs
    }
  ]
})

export default router
