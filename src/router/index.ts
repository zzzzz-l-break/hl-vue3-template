/*
 * @Description: vue-router
 * @Author: 刘 相卿
 * @Date: 2022-03-29 09:51:50
 * @LastEditTime: 2022-07-05 15:51:37
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
