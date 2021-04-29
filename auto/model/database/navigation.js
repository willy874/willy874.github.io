const Model = require('../core')

module.exports = class NavigationModel extends Model {
  constructor() {
    super({
      table: 'navigation',
      fillable: [
        'id',
        'uuid',
        'name',
        'title',
        'sort',
        'path',
        'model',
        'component',
        'parent',
        'alias',
        'group',
      ],
    })
  }
}
