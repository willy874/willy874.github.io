export default class ImageCache {
  constructor() {
    this.cache = {}
  }

  get(url) {
    return this.cache[url]
  }

  set(url, data) {
    if (data instanceof Blob) {
      const reader = new FileReader()
      return new Promise((resolve) => {
        reader.onload = (e) => {
          this.cache[url] = e.target.result
          resolve(e.target.result)
        }
        reader.readAsDataURL(data)
      })
    } else {
      return Promise.resolve(data)
    }
  }

  remove(url) {
    delete this.cache[url]
  }
}
