const Interface = require('../interface')
const dbType = process.env.DB_TYPE.toLowerCase()
const getEloquent = () => {
  if (dbType === 'mysql') {
    return require('./mysql')
  }
}
module.exports = new Interface(getEloquent())
