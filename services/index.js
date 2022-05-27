module.exports = (httpErrors) => ({
  sum: require('./sum.service')(httpErrors),
});
