const Interface = require('../interface')
const SqlEloquent = require('./constructor')
const dbType = process.env.DB_TYPE.toLowerCase()

/**
 * @returns {SqlEloquent}
 */
const getEloquent = () => {
  if (dbType === 'mysql') {
    return require('./mysql')
  }
}
module.exports = new Interface(getEloquent(), ['read', 'create', 'update', 'delete', 'where', 'orWhere', 'pagination'])
