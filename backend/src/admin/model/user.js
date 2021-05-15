import AuthModel from './auth'

export default class UserModel {
  constructor(args) {
    const entity = args || {}
    this.id = entity.id || 0
    this.name = entity.name || ''
    this.auth = entity.auth ? entity.auth.map((p) => new AuthModel(p)) : []
  }
}
