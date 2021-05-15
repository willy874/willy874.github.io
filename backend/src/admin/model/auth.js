export default class AuthModel {
  constructor(args) {
    const entity = args || {}
    this.id = entity.id || 0
    this.name = entity.name || ''
    this.read = entity.read || false
    this.create = entity.create || false
    this.update = entity.update || false
    this.delete = entity.delete || false
  }
}
