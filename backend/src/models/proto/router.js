import { v4 as uuid } from 'uuid'
import * as Views from '@base/views'
import DataModel from './data'
import { ImageModel } from '../data'

export default class RouterModel extends DataModel {
  constructor(args) {
    super(args)
    const entity = args || {}
    this.uuid = entity.uuid || uuid().substring(0, 8)
    this.name = entity.name || ''
    this.path = entity.path || ''
    this.title = entity.title || ''
    this.meta = {}
    this.meta.open = true
    if (entity.edit) this.meta.edit = true
    Object.keys(entity.meta || {}).forEach(key => {
      this.meta[key] = entity.meta[key]
    })
    this.children = entity.children
      ? entity.children.map(child => {
          child.parent = this
          return new RouterModel(child)
        })
      : []
    console.log(Views)
    if (Object.keys(Views).includes(entity.component)) this.component = Views[entity.component]
    if (entity.parent) this.parent = entity.parent || null
    if (entity.alias) this.alias = entity.alias
    if (entity.props) this.props = entity.props
    if (entity.beforeEnter) this.beforeEnter = entity.beforeEnter
    if (entity.group) this.group = entity.group
    if (entity.icon) this.icon = new ImageModel(entity.icon)
  }

  /**
   * @param {Function} callback
   */
  forEachDeep(callback) {
    let index = 0
    let level = 0
    const deep = (obj, order) => {
      level++
      callback(obj, { index, order, level })
      if (obj.children) {
        index++
        obj.children.forEach((item, i) => {
          deep(item, i)
        })
        level--
      }
    }
    deep(this, 0)
  }

  /**
   * Structured
   */
  static structured(data) {
    const childrenSearch = routes => {
      const children = data.filter(r => r.parent === routes.name)
      if (children && children.length) {
        routes.children = children.map(item => childrenSearch(item))
      }
      return routes
    }
    return data.filter(r => !r.parent).map(r => childrenSearch(r))
  }
}
