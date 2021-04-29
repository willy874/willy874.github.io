import DataModel from './data'
import { definePropertySet } from '../../library'
import { axiosInstance } from '../../api'

/**
 * @property {Array.<*>} data         - ListModel 管理的 Model
 * @property {Boolean} loading        - 目前是否為讀取中
 * @property {Number} current_page    - 當前 ListModel 控制的頁碼
 * @property {Number} last_page       - 資料總合的頁數
 * @property {Number} per_page        -
 * @property {Number} from            -
 * @property {Number} to              -
 * @property {Number} total           - 總資料數長度
 * @property {String} path            - 資料來源的網址
 * @property {Function} modelType     - data 內的 Model 類型
 * @property {String} primaryKey      - 該資料使用的主 key
 * @property {Object} api             - 該 model api 的 Url，如果使用 ListModel 的方法建立會往底下繼承該資料
 */
export default class ListModel {
  constructor(args) {
    const entity = (() => {
      if (args) {
        return typeof args === 'string' ? JSON.parse(args) : args
      }
      return {}
    })()
    const Model = entity.modelType || DataModel
    const api = entity.api || ''
    this.data = (entity.data && entity.data.map(p => new Model(p))) || []
    this.loading = entity.loading || false
    this.current_page = entity.current_page || 0
    this.last_page = entity.last_page || 0
    this.per_page = entity.per_page || 0
    this.from = entity.from || 0
    this.to = entity.to || 0
    this.total = entity.total || 0
    this.path = entity.path || ''
    definePropertySet.call(
      this,
      {
        entity,
        modelType: Model,
        primaryKey: entity.primaryKey || 'id',
        api,
      },
      {
        enumerable: false,
        writable: true,
      }
    )
  }

  setData(data) {
    const Model = this.modelType
    return data.map(
      p =>
        new Model({
          ...p,
          primaryKey: this.primaryKey,
          api: this.api,
        })
    )
  }

  /**
   * 設定 model property 值
   * @param {*} entity
   */
  set(entity) {
    Object.keys(entity).map(key => {
      if (key === 'data') {
        this[key] = this.setData(entity[key])
      } else {
        this[key] = entity[key]
      }
    })
  }

  setPages(args) {
    const entity = args || {}
    this.current_page = entity.current_page || 0
    this.last_page = entity.last_page || 0
    this.per_page = entity.per_page || 0
    this.from = entity.from || 0
    this.to = entity.to || 0
    this.total = entity.total || 0
    this.path = entity.path || ''
  }

  getPagination(page = '1', options = {}) {
    return axiosInstance({
      baseURL: '',
      query: typeof page === 'object' ? page : { page },
      ...options,
    }).get(this.path)
  }

  reflashData(page = '1', options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      this.getPagination(page, options)
        .then(res => {
          this.loading = true
          this.data = this.setData(res.data)
          resolve()
        })
        .catch(reject)
    })
  }

  pushData(page = '1', options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      this.getPagination(page, options)
        .then(res => {
          this.loading = true
          const Model = this.modelType
          res.data.forEach(p => {
            const targetModel = this.data.find(m => m[this.primaryKey] === p[this.primaryKey])
            if (targetModel) {
              targetModel.set(p)
            } else {
              this.data.push(
                new Model({
                  p,
                  primaryKey: this.primaryKey,
                  api: this.api,
                })
              )
            }
          })
          resolve()
        })
        .catch(reject)
    })
  }

  readList(options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .get(this.api)
        .then(res => {
          this.loading = true
          this.set(res.data)
          resolve(res)
        })
        .catch(reject)
    })
  }

  findModel(key) {
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index] || this.data[index][this.primaryKey] || key) {
        console.error('[ListModel.findModel] The comparison value is undefined.')
        break
      }
      if (this.data[index][this.primaryKey].__proto__ !== key.__proto__) {
        console.error('[ListModel.findModel] Match type does not match.')
        break
      }
      if (this.data[index][this.primaryKey] === key) {
        return this.data[index]
      }
    }
    return null
  }
}
