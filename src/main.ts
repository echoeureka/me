import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  routes,
  history: createWebHistory()
})

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) return savedPosition
  else return { top: 0 }
}

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
)