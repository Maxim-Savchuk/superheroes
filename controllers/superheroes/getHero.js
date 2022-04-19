const { Superhero } = require('../../models');

const getHero = async (req, res, next) => {
  const { superheroId } = req.params;
  const result = await Superhero.findById(superheroId);
  if (!result) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json({
    result,
  });
};

module.exports = getHero;
