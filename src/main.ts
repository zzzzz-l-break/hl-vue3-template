/*
 * @Description: main
 * @Author: 刘 相卿
 * @Date: 2022-03-29 09:37:46
 * @LastEditTime: 2022-07-05 15:58:19
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './styles/common.scss'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn }).use(createPinia()).use(router).mount('#app')
