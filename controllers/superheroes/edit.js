const { Superhero } = require('../../models');

const edit = async (req, res, next) => {
  const { superheroId } = req.params;
  const result = await Superhero.findByIdAndUpdate(superheroId, req.body, { new: true });
  res.json({
    result,
  });
};

module.exports = edit;
