const { Superhero } = require('../../models');

const getAll = async (req, res, next) => {
  const superheroes = await Superhero.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: superheroes,
    },
  });
};

module.exports = getAll;
