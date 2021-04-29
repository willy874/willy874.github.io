const fs = require('fs').promises
const path = require('path')

module.exports = function (ops) {
  return Promise.all(
    Object.keys(ops.schema).map(async modelName => {
      const { output, root } = ops
      const DB_TYPE = ops.type || 'json'
      const { FileName } = ops.methods
      const compilerPlugin = (() => {
        switch (DB_TYPE) {
          case 'csv':
            return require('../plugins/database-csv')
          case 'json':
            return require('../plugins/database-json')
          default:
            return require('../plugins/database-json')
        }
      })()
      const fn = new FileName(modelName)
      const filename = fn.data.join('-').toLowerCase() + '.' + DB_TYPE
      const writeString = compilerPlugin(ops, modelName)
      const folders = await fs.readdir(path.join(root, output.database))
      if (!folders.includes(filename)) {
        return fs.writeFile(path.join(root, output.database, filename), writeString).then(() => {
          console.log(`Create ${filename} DB success.`.green)
        })
      }
    })
  )
}
