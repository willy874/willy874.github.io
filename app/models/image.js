const Model = require('../core')

module.exports = class ImageModel extends Model {
  constructor() {
    super({
      table: 'image',
      fillable: [
        'id',
        'name',
        'ext',
        'sort',
        'type',
        'url',
        'alt',
        'title',
        'infomation',
      ],
    })
  }
}
