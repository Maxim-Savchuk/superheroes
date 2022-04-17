const { Schema, model } = require('mongoose');

const superheroSchema = Schema({
  nickname: {
    type: String,
    required: [true, 'Set name for superhero'],
  },
  real_name: {
    type: String,
  },
  origin_description: {
    type: String,
  },
  superpowers: {
    type: String,
  },
  catch_phrase: {
    type: String,
  },
});

const Superhero = model('superhero', superheroSchema);

module.exports = { Superhero };
