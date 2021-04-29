const Model = require('../core')

module.exports = class ImageRelationModel extends Model {
  constructor() {
    super({
      table: 'image-relation',
      fillable: ['id', 'image_id', 'relation_name', 'relation_id'],
    })
  }
}
