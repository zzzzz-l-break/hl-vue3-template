/*
 * @Description: auth
 * @Author: 刘 相卿
 * @Date: 2022-04-02 09:38:31
 * @LastEditTime: 2022-04-02 10:47:57
 */
import Cookies from 'js-cookie'
import { isObjectLike } from './tools'

const TOKEN_KEY = '$DA_TOKEN'
const STORAGE_PREFIX = '$DA_'

class Storage {
  get(key: string) {
    let storeData: any = localStorage.getItem(STORAGE_PREFIX + key) || ''
    try {
      const reg = /^[0-9]*$/
      if (!reg.test(storeData)) {
        //字符串不需要转移
        storeData = JSON.parse(storeData)
      }
    } catch (error) {
      console.log(error)
    }
    return storeData
  }

  set(key: any, data: any) {
    if (isObjectLike(key)) {
      key.forEach((item: any, indexKey: any) => {
        this.set(indexKey, item)
      })
    } else {
      if (isObjectLike(data)) {
        try {
          data = JSON.stringify(data)
        } catch (error) {
          console.log(error)
        }
      }
      localStorage.setItem(STORAGE_PREFIX + key, data)
    }
  }

  remove(key: any) {
    if (isObjectLike(key)) {
      key.forEach((item: any) => {
        this.remove(item)
      })
    } else {
      localStorage.removeItem(STORAGE_PREFIX + key)
    }
  }

  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, { expires: 7 })
  }

  getToken(): string | undefined {
    return Cookies.get(TOKEN_KEY)
  }

  removeToken() {
    Cookies.remove(TOKEN_KEY)
  }
}

const storage = new Storage()

export default storage
