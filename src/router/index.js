import { createRouter, createWebHistory } from 'vue-router'
import ValuteList from '../views/ValuteList.vue'
import ValuteConverter from '../views/ValuteConverter.vue'

const routes = [
  {
    path: '/',
    name: 'valutelist',
    component: ValuteList
  },
  {
    path: '/converter',
    name: 'converter',
    component: ValuteConverter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
