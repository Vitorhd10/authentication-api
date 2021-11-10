const Koa = require("koa");
const Router = require("koa-router");
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa();
const router = new Router();

module.exports = () => {
  console.log("[Koa] creating a new server")

  applyRoutes(router)

  app.use(bodyParser()).use(router.routes()).use(router.allowedMethods()).use(cors())

  app.listen(8080)
};
