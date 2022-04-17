const { Superhero } = require('../../models');

const remove = async (req, res, next) => {
  const { superheroId } = req.params;
  const result = await Superhero.findByIdAndRemove(superheroId);
  if (!result) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'superhero deleted',
    data: {
      result,
    },
  });
};

module.exports = remove;
