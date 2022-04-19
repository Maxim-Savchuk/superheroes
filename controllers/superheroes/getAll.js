const { Superhero } = require('../../models');

const getAll = async (req, res, next) => {
  const PAGE_SIZE = 5;
  const page = parseInt(req.query.page || '0');
  const total = await Superhero.countDocuments({});
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const superheroes = await Superhero.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages,
    result: superheroes,
  });
};

module.exports = getAll;
