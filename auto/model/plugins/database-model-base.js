module.exports = function (ops, modelName) {
  const { FileName } = ops.methods
  const model = ops.schema[modelName]
  const fn = new FileName(modelName)
  return (
    '' +
    "const Model = require('../core')\n" +
    '\n' +
    `module.exports = class ${modelName}Model extends Model {\n` +
    `constructor() {\n` +
    `super({\n` +
    `table: '${fn.data.join('-')}',\n` +
    `fillable: [${model.tebles
      .filter(t => !t.viewRelation)
      .map(table => `'${table.name}'`)
      .join(', ')}],\n` +
    `})\n` +
    `}\n` +
    '}\n'
  )
}
