/*
 * @Description: 公共
 * @Author: 刘 相卿
 * @Date: 2022-03-31 14:01:59
 * @LastEditTime: 2022-03-31 14:03:15
 */
import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
  state: () => ({
    layout: ''
  }),

  actions: {
    setLayout(layout: string) {
      this.$patch(state => {
        state.layout = layout
      })
    }
  }
})
