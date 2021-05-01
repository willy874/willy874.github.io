const Migration = require('../migration')
const Schema = require('../schema')
const Blueprint = require('../blueprint')

module.exports = class ImageTable extends Migration {
  constructor(args) {
    const entity = args ? args : {}
    super({
      connection: entity.connection,
      file: entity.file,
    })
    this.tableName = 'image'
  }
  up() {
    return Schema.create(this, (table = new Blueprint()) => {
      table.id()
      table.varchar('name', 255)
      table.varchar('type', 255).setNullable()
      table.int('sort').setDefault(0)
      table.varchar('ext', 255).setNullable()
      table.varchar('url', 255).setNullable()
      table.varchar('alt', 255).setNullable()
      table.varchar('title', 255).setNullable()
      table.json('infomation').setNullable()
      table.blob('file').setNullable()
    })
  }
  down() {
    return Schema.drop(this, (table = new Blueprint()) => {
      table.drop()
    })
  }
}
