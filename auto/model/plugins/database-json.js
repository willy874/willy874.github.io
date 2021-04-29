module.exports = function (ops, modelName) {
  if (ops.data && ops.data[modelName]) {
    return JSON.stringify(ops.data[modelName])
  }
  return '[]'
}
