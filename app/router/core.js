const Controller = require('../controller')
const SocketServer = require('ws').Server
const fs = require('fs')
const path = require('path')

module.exports = class Route {
  constructor(args) {
    const entity = args ? args : {}
    if (entity.onInit) entity.onInit(entity)
    this.entity = entity
    this.app = entity.app
    this.listen = entity.listen
    this.database = entity.database
    this.apiData = []
    if (entity.webSocket) {
      this.webSocket = {
        ...entity.webSocket,
        client: [],
        server: new SocketServer({
          server: this.listen,
        }),
        connection: new Promise(resolve => {
          resolve(new Function())
        }),
      }
      this.webSocket.server.on('connection', ws => {
        this.webSocket.client.push(ws)
        this.webSocket.connection.then(callback => {
          callback({
            ...entity,
            client: ws,
          })
        })
      })
    }
    if (entity.onCreate)
      entity.onCreate({
        ...entity,
      })
  }
  handleCallback(data) {
    const handle = callback => {
      if (typeof callback === 'function') {
        return callback
      } else if (typeof callback === 'string' && /@/.test(callback)) {
        const str = callback.split('@')
        if (!Controller[str[0]]) {
          console.log(`沒有名為 ${str[0]} 的 Function`.error)
          throw new Error('找不到該 Controller.')
        }
        const contro = new Controller[str[0]](this.entity)
        if (!contro[str[1]]) {
          console.log(`沒有名為 ${str[1]} 的 Function`.error)
          throw new Error('找不到該 Controller Function.')
        }
        return contro[str[1]]
      } else if (callback === 'Auth') {
        const Auth = new Controller.AuthController(this.entity)
        return Auth.middleware
      } else {
        console.log(`callback 必須是 Function.`.error)
        throw new Error('必須是個 Controller')
      }
    }
    if (Array.isArray(data)) {
      return data.map(item => handle(item))
    } else {
      return handle(data)
    }
  }
  createSocket(callback) {
    if (this.webSocket) {
      this.webSocket.connection = new Promise((resolve, reject) => {
        try {
          resolve(callback)
        } catch {
          reject()
        }
      })
    } else {
      console.log('Is webSocket not dified.'.red)
    }
  }
  getFunctionName(callback) {
    if (typeof callback === 'string' && /@/.test(callback)) {
      return callback.split('@').join(' ')
    } else if (typeof callback === 'function') {
      return callback.name
    } else if (Array.isArray(callback)) {
      return callback.map(c => this.getFunctionName(c)).join(' ')
    } else if (typeof callback === 'string') {
      return callback
    } else {
      return ''
    }
  }
  api(method, url, callback) {
    this.apiData.push({
      method,
      url,
      name: this.getFunctionName(callback),
    })
    this.app[method]('/api' + url, this.handleCallback(callback))
  }
  get(url, callback) {
    this.app.get(url, this.handleCallback(callback))
  }
}
