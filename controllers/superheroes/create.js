const { Superhero } = require('../../models');

const create = async (req, res, next) => {
  const result = await Superhero.create(req.body);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = create;
