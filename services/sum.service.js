module.exports = ({ BadRequest }) => ({

  sum: (n1, n2) => {
    if (!n1.match(/^\d+$/) || !n2.match(/^\d+$/)) {
      throw new BadRequest({ parameters: 'should be numbers' });
    }

    return {
      sum: parseInt(n1) + parseInt(n2),
    };
  },

});
