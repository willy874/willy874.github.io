const fs = require('fs').promises
const path = require('path')
const prettier = require('prettier')
const compilerPlugin = require('../plugins/database-model-base')

module.exports = function (ops) {
  return Promise.all([
    Object.keys(ops.schema).map(async modelName => {
      const { output, root, overwrite } = ops
      const { FileName } = ops.methods
      const fn = new FileName(modelName)
      const filename = fn.data.join('-') + '.js'
      const writeString = prettier.format(compilerPlugin(ops, modelName), {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        parser: 'babel',
      })
      const folders = await fs.readdir(path.join(ops.root, output.databaseModel))
      const fsWriteFile = writePath => fs.writeFile(path.join(root, writePath, filename), writeString)
      if (!folders.includes(filename)) {
        return fsWriteFile(output.databaseModel).then(() => {
          fsWriteFile(path.join.apply(path, ['auto', 'model', 'database']))
          console.log(
            'Create'.green,
            filename.yellow,
            `Database Model success.`.green,
            path.join(root, output.databaseModel, filename).blue
          )
        })
      } else {
        if (overwrite) {
          return fsWriteFile(output.databaseModel).then(() => {
            fsWriteFile(path.join.apply(path, ['auto', 'model', 'database']))
            console.log(
              'Overwrite'.green,
              filename.yellow,
              `Database Model success.`.green,
              path.join(root, output.databaseModel, filename).blue
            )
          })
        }
      }
    }),
  ])
}
