/*
 * @Description:路由配置
 * @Author: 刘 相卿
 * @Date: 2022-03-29 10:02:34
 * @LastEditTime: 2022-07-05 15:51:43
 */

import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('../views/404.vue')
  }
]