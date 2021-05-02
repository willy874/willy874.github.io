const Model = require('../models')
const serviceImage = require('./image')

module.exports = {
  getNavigation () {
    return new Promise(async resolve => {
      const NavigationModel = new Model.Navigation
      NavigationModel.all().then(data => {
        Promise.all(
          data.map(async item => {
            const Images = await serviceImage.relationImageById(NavigationModel.table, item.id)
            item.icon = Images.find(p => p) || ''
            return item
          })
        ).then(result => {
          resolve(result)
        })
      })
    })
  },
  getNavigationById (id) {
    return new Promise(async (resolve, reject) => {
      const NavigationModel = new Model.Navigation
      NavigationModel.where('id', id).get().then(async data => {
        const result = data.find(p => p)
        if (result) {
          const Images = await serviceImage.relationImageById(NavigationModel.table, result.id)
          result.icon = Images.find(p => p)
          resolve(result)
        } else {
          reject('Is models data not defind.')
        }
      })
    })
  }
}
