/**
 * 遞迴一個深層物件
 * @this {Object} 要被遞迴的物件
 * @param {Function} callback
 */
export default function forEachDeep(callback, childrenName = 'children') {
  let index = 0
  let level = 0
  const deep = (obj, order) => {
    level++
    callback(obj, { index, order, level })
    if (obj[childrenName]) {
      index++
      obj[childrenName].forEach((item, i) => {
        deep(item, i)
      })
      level--
    }
  }
  deep(this, 0)
}
