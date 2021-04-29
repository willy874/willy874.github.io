const Controller = require('./core')
const service = require('../service')
// const fs = require('fs')
// req.get('Authorization')

module.exports = class NavigationController extends Controller {
  constructor(app){
    super(app)
  }
  getNavigation(req, res){
    service.Navigation.getNavigation().then(data => {
      res.send(data)
    }).catch(error => {
      res.status(500).send({
        message: 'System handle error.'
      })
    })
  }
  getNavigationById(req, res){
    const { id } = req.params
    service.Navigation.getNavigationById(id).then(data => {
      res.send(data)
    }).catch(error => {
      res.status(500).send({
        message: 'System handle error.',
        error
      })
    })
  }
}