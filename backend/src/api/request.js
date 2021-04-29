import axios from 'axios'
import config from '../config'
// import { getToken } from './user'
// import { tokenFormat } from '../library'
// import { DataModel } from '../library/proto'
// import { v4 as uuidv4 } from 'uuid'
import i18n from '../plugins/i18n'
const lang = i18n.getLocale()
// const i18nMsg = i18n.messages[lang]

export const LoadingModels = {}

// let checkToken = true
export const axiosInstance = param => {
  const ops = param || {}
  const apiConfig = axios.create({
    baseURL: `${config.api.baseUrl}`,
    headers: {
      'X-Client-Version': config.version,
    },
    ...ops,
  })
  const api = (...args) => {
    apiConfig.apply(apiConfig, args)
  }
  Object.keys(apiConfig).forEach(on => {
    api[on] = (...args) => {
      return new Promise((resolve, reject) => {
        const promiseResult = apiConfig[on].apply(apiConfig, args)
        if (promiseResult instanceof Promise) {
          promiseResult.then(resolve)
          ops.resolve = resolve
          ops.reject = reject
        }
      })
    }
  })
  const requestSuccess = req => {
    req.url = (() => {
      const url = [req.url]
      if (ops.params && ops.params.length && ops.params[0]) {
        url.push('/' + ops.params.join('/'))
      }
      if (ops.query) {
        const query = Object.keys(ops.query).map(
          key => key + '=' + ops.query[key]
        )
        url.push('?' + query.join('&'))
      }
      return url.join('')
    })()
    if (sessionStorage.getItem('token')) {
      // Token 檢查系統
      const token = JSON.parse(sessionStorage.getItem('token'))
      if (token) {
        req.headers.Authorization = `${token}`
        req.headers['Authorization-type'] = 'refresh'
        req.headers.Language = lang
      }
    }
    return req
  }
  const requesError = err => {
    return Promise.reject(err)
  }
  const responseSuccess = res => {
    return res
  }
  const responseError = err => {
    if (err.response.data.message === '') {
      // Token 檢查系統
    }
    if (err.response.data.message === '') {
      //
    }
    return ops.reject(err)
  }
  apiConfig.interceptors.request.use(requestSuccess, requesError)
  apiConfig.interceptors.response.use(responseSuccess, responseError)
  return api
}

/**
 * @example
 * axiosRequest(options).method(url, data)
 */
export const request = axiosInstance()
