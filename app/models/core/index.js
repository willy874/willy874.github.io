if (process.env.DB_TYPE.toLowerCase() === 'json') {
  module.exports = require('./json')
}
if (process.env.DB_TYPE.toLowerCase() === 'csv') {
  module.exports = require('./csv')
}
if (process.env.DB_TYPE.toLowerCase() === 'mysql') {
  module.exports = require('./mysql')
}
