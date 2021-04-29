const buildDatabaseModel = require('./database-model')
const buildViewModel = require('./view-model')
const buildDatabase = require('./database')
const schema = require('../schema')
const methods = require('../../function')

module.exports = function (settings) {
  settings.schema = schema
  settings.methods = methods
  buildDatabaseModel(settings)
  buildViewModel(settings)
  buildDatabase(settings)
}
