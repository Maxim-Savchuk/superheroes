const { Superhero } = require('../../models');

const remove = async (req, res, next) => {
  const { superheroId } = req.params;
  const result = await Superhero.findByIdAndRemove(superheroId);
  if (!result) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json({
    message: 'superhero deleted',
    result,
  });
};

module.exports = remove;
