module.exports = (services) => ({
  v1SumController: require('./sum.controller')(services),
});
