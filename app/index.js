require('colors')
require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const createRoute = require('./router/index')
// const root = process.env.ROOT || path.join(__dirname, '..')
const root = path.join(__dirname)
const baseUrl = process.env.BASE_URL
const publicUrl = process.env.PUBLIC_URL
const storageUrl = process.env.STORAGE_URL
const port = process.env.PORT

app
  .use(cors())
  .use(cookieParser())
  .use(express.static(path.join(root, publicUrl)))
  .use(express.static(path.join(root, storageUrl)))
app.root = root
const Route = createRoute({
  app,
  listen: app.listen(port, () => {
    // listen callback.
  }),
  database: {},
})
console.log(`${baseUrl}:${port}`.blue)
module.exports = Route
