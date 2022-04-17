const { Superhero } = require('../../models');

const getAll = async (req, res, next) => {
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const superheroes = await Superhero.find({}, '', { skip, limit: Number(limit) });
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: superheroes,
    },
  });
};

module.exports = getAll;
