import { ArticleModel } from '../models/data'

export default {
  dataSchema: {},
  authDataSchema: {
    ArticleModel: {
      model: ArticleModel,
      api: 'article',
    },
  },
}
