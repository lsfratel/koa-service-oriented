module.exports.configure = (router, controllers) => {
  require('./sum.routes')(router, controllers);
};
