import schema from './schema'
import { ListModel } from '@/models'

/**
 * init() => create() =>
 */
export default class Database {
  constructor() {
    this.auth = false
    this.schema = schema
    this.data = {}
  }

  init() {
    Object.keys(this.schema.dataSchema).forEach((key) => {
      const data = localStorage.getItem(`DB-${key}`)
      const modelSchema = this.schema.dataSchema[key]
      this.data[key] = new ListModel({
        data: data ? JSON.parse(data) : [],
        model: modelSchema.model,
        api: modelSchema.api,
      })
    })
  }

  login() {
    this.auth = true
    Object.keys(this.schema.authDataSchema).forEach((key) => {
      const data = localStorage.getItem(`DB-${key}`)
      const modelSchema = this.schema.authDataSchema[key]
      this.data[key] = new ListModel({
        data: data ? JSON.parse(data) : [],
        model: modelSchema.model,
        api: modelSchema.api,
      })
    })
  }

  logout() {
    this.auth = false
    Object.keys(this.schema.authDataSchema).forEach((key) => {
      this.data[key] = null
    })
  }

  addUpdate(table, value) {
    const list = this.data[table]
    const data = list.data
    const createId = Math.max(...data.map((p) => Number(p.id))) + 1
    value.id = createId
    data.push(value)
    localStorage.setItem(`DB-${table}`, JSON.stringify(data))
    return value
  }

  update(table, id, value) {
    const list = this.data[table]
    const data = list.data
    const target = data.find((p) => Number(p.id) === Number(id))
    target.set(value)
    localStorage.setItem(`DB-${table}`, JSON.stringify(data))
    return target
  }

  delete(table, id) {
    const list = this.data[table]
    const data = list.data
    const index = data.map((p) => Number(p.id)).indexOf(id)
    const target = data.splice(index, 1)
    localStorage.setItem(`DB-${table}`, JSON.stringify(data))
    return target[0]
  }

  reflash(table) {
    if (table) {
      const dataDB = this.data[table]
      if (dataDB) {
        localStorage.setItem(`DB-${table}`, JSON.stringify(dataDB.data))
      }
    } else {
      Object.keys(this.data).forEach((key) => {
        const dataDB = this.data[key]
        if (dataDB) {
          localStorage.setItem(`DB-${key}`, JSON.stringify(dataDB.data))
        }
      })
    }
  }
}
