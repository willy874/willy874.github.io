const Model = require('./core')

module.exports = class ArticleModel extends Model {
  constructor() {
    super({
      table: 'article',
      fillable: [
        'subject',
        'content',
        'status',
        'sort',
        'created_user',
        'updated_user',
        'deleted_user',
        'published_at',
        'finished_at',
      ],
    })
  }
}
