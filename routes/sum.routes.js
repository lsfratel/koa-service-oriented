module.exports = (router, { v1SumController: v1Controller }) => {
  router.get('sum', '/v1/sum/:n1/:n2', v1Controller.sum);
};
