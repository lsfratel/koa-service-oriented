const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const { default: httpErrors } = require('throw-http-errors');

const services = require('../services')(httpErrors);
const controllers = require('../controllers')(services);
const routes = require('../routes');

module.exports.load = () => {
  const app = new Koa();
  const router = new Router();

  routes.configure(router, controllers);

  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
