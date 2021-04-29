const data = require('./data')
const path = require('path')
const root = process.env.ROOT || path.join(__dirname, '..', '..')

module.exports = {
  root,
  output: {
    database: path.join.apply(path, ['app', 'database']),
    databaseModel: path.join.apply(path, ['app', 'models']),
    viewModel: path.join.apply(path, ['backend', 'src', 'models', 'data']),
  },
  type: 'csv',
  data,
  overwrite: true,
  plugins: [],
}
