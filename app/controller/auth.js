const Controller = require('./core')
// const Model = require('../models')
// const fs = require('fs')
// req.get('Authorization')

module.exports = class AuthController extends Controller {
  constructor(app) {
    super(app)
  }
  AuthIndex(req, res, next) {
    next()
  }
  middleware(req, res, next) {
    console.log('Authorization', req.get('Authorization'))
    console.log(req.url)
    next()
  }
}
