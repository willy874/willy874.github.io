import { createRouter, createWebHistory } from 'vue-router'
import getRoutesTree from './routes-tree'
import middleware from './middleware'
console.log(getRoutesTree())
const router = createRouter({
  history: createWebHistory(),
  routes: getRoutesTree(),
})

router.beforeEach(middleware)

export default router
