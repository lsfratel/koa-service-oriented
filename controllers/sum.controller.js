module.exports = ({ sum: service }) => ({

  sum: async (ctx) => {
    try {
      const { n1, n2 } = ctx.params;
      ctx.body = {
        success: true,
        data: service.sum(n1, n2),
      };
    } catch (e) {
      ctx.status = e.status;
      ctx.body = {
        success: false,
        errors: [
          e.message,
        ],
      };
    }
  },

});
