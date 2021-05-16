module.exports = function valueString(value, type) {
  switch (true) {
    case value === undefined:
      return 'undefined'
    case value === null:
      return 'null'
    case value === 0:
      return '0'
    case value === '':
      return "''"
    case isNaN(value):
      return 'NaN'
    case Array.isArray(value):
      return type === 'sql'
        ? `[${value.map((v) => valueString(v)).join(',')}]`
        : `(${value.map((v) => valueString(v)).join(',')})`
    case typeof value === 'string':
      return `'${value}'`
    case typeof value === 'boolean':
      return value.toString()
    case typeof value === 'number':
      return value.toString()
    case typeof value === 'function':
      return value.toString()
    case typeof value === 'object':
      return JSON.stringify(value)
  }
}
