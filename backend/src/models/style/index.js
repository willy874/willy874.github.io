export default class StyleModel {
  constructor(args) {
    const entity = args || {}
    this.className = new Map()
    if (entity.class) {
      Object.keys(entity.class).forEach(key => {
        this.className.set(key, entity.class[key])
      })
    }
  }

  getClassName(key) {
    return this.className.get(key)
  }
}
