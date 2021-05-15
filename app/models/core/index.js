module.exports = class Model {
  constructor(args) {
    const entity = args || {}
    this.table = entity.table
    this.fillable = entity.fillable
    this.desc = false
  }
}
