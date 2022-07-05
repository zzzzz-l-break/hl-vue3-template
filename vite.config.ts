/*
 * @Description:
 * @Author: 刘 相卿
 * @Date: 2022-03-29 09:37:46
 * @LastEditTime: 2022-07-05 15:56:58
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  server: {
    proxy: {
      '^/hl-data-adapter-web': {
        target: 'http://192.168.17.1:3000/mock/445/',
        rewrite: path => path.replace(/^\/hl-data-adapter-web/, ''),
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()]
    })
  ]
})
