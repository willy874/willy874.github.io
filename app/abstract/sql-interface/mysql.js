const { Observable } = require('../../function')
const conn = require('../../database/connection')
const SqlEloquent = require('./constructor')

const typeFormat = value => {
  switch (true) {
    case typeof value === 'string':
      return `'${value}'`
    default:
      return value
  }
}
SqlEloquent.prototype.where = function () {}
SqlEloquent.prototype.orWhere = function () {}
SqlEloquent.prototype.pagination = function () {}
SqlEloquent.prototype.read = function () {}
SqlEloquent.prototype.create = function (data) {
  const insertData = {}
  this.fillable.forEach(key => {
    insertData[key] = data[key]
  })
  return new Promise((resolve, reject) => {
    const sqlQuery = `
INSERT INTO MyGuests (
  ${Object.keys(insertData)
    .map(key => key)
    .join(',')}
)
VALUES (
  ${Object.keys(insertData)
    .map(key => typeFormat(insertData[key]))
    .join(',')}
)`
    conn.connect()
    conn
      .query(sqlQuery)
      .on('result', result => {
        resolve(result)
        conn.end()
      })
      .on('error', error => {
        reject(error)
        conn.end()
      })
  })
}
SqlEloquent.prototype.update = function () {}
SqlEloquent.prototype.delete = function () {}

/**
 * @extends {SqlEloquent}
 */
module.exports = SqlEloquent
