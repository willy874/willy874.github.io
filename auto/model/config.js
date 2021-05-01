// const data = require('./data')
const path = require('path')
const root = path.join(__dirname, '..', '..')
// const root = process.env.ROOT

module.exports = {
  root,
  output: {
    database: path.join.apply(path, ['app', 'database']),
    databaseModel: path.join.apply(path, ['app', 'models']),
    viewModel: path.join.apply(path, ['backend', 'src', 'models', 'data']),
  },
  type: 'csv',
  // data,
  overwrite: true,
  plugins: [],
}
