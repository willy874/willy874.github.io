const Controller = require('../controller')
const SocketServer = require('ws').Server
const fs = require('fs')
const path = require('path')

module.exports = class Route {
  constructor(args) {
    const entity = args ? args : {}
    this.entity = entity
    this.app = entity.app
    this.listen = entity.listen
    // this.database = entity.database
  }
}
