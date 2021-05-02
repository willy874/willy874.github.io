const Controller = require('../controller')
const ControllerModel = require('../controller/core')
const Models = require('../models')
const { FileName } = require('../function')

module.exports = function createModelRouter(Router) {
  const createController = (name = new FileName('')) => {
    const TargetController = Controller[name.ConverBigHump() + 'Controller']
    if (TargetController && TargetController.prototype instanceof ControllerModel) {
      return new TargetController(Router)
    }
    return {}
  }
  Object.keys(Models).forEach(modelName => {
    const name = new FileName(modelName)
    const config = {
      prefix: 'backend',
      controller: createController(name),
      middleware: 'AuthIndex',
    }
    Router.api(
      Object.assign({}, config, {
        method: 'get',
        url: `/${name.data.join('-')}`,
        handle: `get${name.ConverBigHump()}`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'get',
        url: `/${name.data.join('-')}/list`,
        handle: `get${name.ConverBigHump()}List`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'get',
        url: `/${name.data.join('-')}/{:id?}`,
        handle: `get${name.ConverBigHump()}ById`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'post',
        url: `/${name.data.join('-')}`,
        handle: `create${name.ConverBigHump()}`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'put',
        url: `/${name.data.join('-')}`,
        handle: `update${name.ConverBigHump()}`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'put',
        url: `/${name.data.join('-')}/{:id?}`,
        handle: `update${name.ConverBigHump()}ById`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'delete',
        url: `/${name.data.join('-')}`,
        handle: `delete${name.ConverBigHump()}`,
      })
    )
    Router.api(
      Object.assign({}, config, {
        method: 'delete',
        url: `/${name.data.join('-')}/{:id?}`,
        handle: `delete${name.ConverBigHump()}ById`,
      })
    )
  })
}
