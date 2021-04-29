export const lastIndex = function () {
  return Object.keys(this).sort().reverse()[0]
}
export const lastfind = function () {
  const arrFilter = this.filter.apply(this, arguments)
  if (arrFilter.length) {
    return arrFilter[this.lastIndex]
  }
  return undefined
}
