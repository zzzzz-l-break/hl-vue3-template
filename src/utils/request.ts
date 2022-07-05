/*
 * @Description: axios拦截器
 * @Author: 刘 相卿
 * @Date: 2022-04-02 09:10:28
 * @LastEditTime: 2022-07-05 15:54:44
 */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const prefix = '/hl-v3-template'

class Axios {
  private service: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.service = axios.create(options)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.service.interceptors.request.use(config => {
      return config
    })
    this.service.interceptors.response.use((res: AxiosResponse) => {
      if (res.status === 200 && res.data.returnBoolean) {
        return res.data.returnObject
      }
      const errorMessage: Record<number, string> = {
        400: '请求语法错误',
        401: '没有权限',
        403: '拒绝此请求',
        404: '找不到资源',
        500: '服务器内部错误',
        501: '服务器不支持此请求的功能'
      }
      const message = res.data.returnMessage || errorMessage[res.status] || '服务器错误'

      ElMessage({
        showClose: true,
        message: message,
        type: 'error'
      })

      return Promise.reject(message)
    })
  }

  // 查询
  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.service.get(`${prefix}${url}`, config)
  }
  // 删除
  // url传参
  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.service.delete(`${prefix}${url}`, config)
  }
  // 插入
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return this.service.post(`${prefix}${url}`, data, config)
  }
  // 更新
  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return this.service.put(`${prefix}${url}`, data, config)
  }
}

const request = new Axios({
  timeout: 10 * 1000
})

export default request
