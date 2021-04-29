import Validate from 'validate.js'
import dayjs from 'dayjs'
import { definePropertySet } from '../../library'
import { axiosInstance } from '../../api'
import '../validate'

/**
 * @property {Number} id             - 該筆資料唯一索引
 * @property {String} created_at     - 該筆資料建立時間 YYYY/MM/DD HH:MM:ss
 * @property {String} updated_at     - 該筆資料最後編輯時間 YYYY/MM/DD HH:MM:ss
 * @property {String} deleted_at     - 該筆資料刪除時間 YYYY/MM/DD HH:MM:ss
 * @property {Object} errors         - 目前產生的錯誤訊息
 * @property {Boolean} loading       - 目前是否為讀取中
 * @property {String} mode           - ["static","edit","delete"]
 * @property {String} api            - 該 model api 的 Url
 */
export default class DataModel {
  /** @param {*} args 若為 JSON 字串則會經過轉型 */
  constructor(args) {
    const entity = (() => {
      if (args) {
        return typeof args === 'string' ? JSON.parse(args) : args
      }
      return {}
    })()
    const api = entity.api || ''
    this.id = entity.id || 0
    this.created_at = entity.created_at || undefined
    this.updated_at = entity.updated_at || undefined
    this.deleted_at = entity.deleted_at || undefined
    this.errors = entity.errors || {}
    this.loading = entity.loading || false
    this.mode = entity.mode || 'static'

    definePropertySet(
      this,
      {
        entity,
        edited: entity.edited || false,
        deleted: entity.deleted || false,
        api,
        primaryKey: entity.primaryKey || 'id',
        dayFormat: entity.dayFormat || 'YYYY/MM/DD HH:mm:ss',
      },
      {
        enumerable: false,
        writable: true,
      }
    )
  }

  /**
   * 取得當前錯誤訊息
   * @param {string} field 指定的 model key
   * @return {object} 取得指定的錯誤訊息
   */
  hasError(field, index = 0) {
    return this.errors && this.errors[field] ? this.errors[field][index] : null
  }

  /**
   * 進行指定的 model key 的驗證
   * @param {string} field 指定的 model key
   * @return {Object} 取得指定驗證項目的錯誤訊息
   */
  valid(field, index) {
    const rules = this.rules() || {}
    const error = Validate.single(this[field], rules[field])
    this.errors = this.errors || []
    this.errors[field] = error
    return error ? error[index] : null
  }

  /**
   * 進行 model 的驗證
   * @param {Object} setRules 要改變的驗證規則
   * @return {Object} 取得所有錯誤訊息
   */
  validate(setRules) {
    const rules = setRules || this.rules()
    this.errors = Validate(this, rules)
    return this.errors || false
  }

  /**
   * 設定 model property 值
   * @param {*} entity
   */
  set(entity) {
    Object.keys(entity).map(key => {
      if (key === 'created_at' || key === 'updated_at' || key === 'deleted_at') {
        this[key] = dayjs(entity[key]).format(this.dayFormat)
      } else if (key !== 'errors' || key !== 'loading' || key !== 'mode') {
        this[key] = entity[key]
      }
    })
  }

  rules() {
    return {}
  }

  readData(options) {
    this.loading = true
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .get(`${this.api}/${this[this.primaryKey]}`)
        .then(res => {
          this.loading = false
          this.set(res.data)
          resolve(res)
        })
        .catch(reject)
    })
  }

  createData(options) {
    this.loading = true
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .post(`${this.api}/${this[this.primaryKey]}`, this)
        .then(res => {
          this.loading = false
          this.set(res.data)
          this.created_at = dayjs().format(this.dayFormat)
          resolve(res)
        })
        .catch(reject)
    })
  }

  updateData(options) {
    this.loading = true
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .put(`${this.api}/${this[this.primaryKey]}`, this)
        .then(res => {
          this.loading = false
          this.updated_at = dayjs().format(this.dayFormat)
          resolve(res)
        })
        .catch(reject)
    })
  }

  deleteData(options) {
    this.loading = true
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .delete(`${this.api}/${this[this.primaryKey]}`, this)
        .then(res => {
          this.loading = false
          this.deleted_at = dayjs().format(this.dayFormat)
          resolve(res)
        })
        .catch(reject)
    })
  }
}
