const { Schema, model } = require('mongoose');

const superheroSchema = Schema({
  nickname: {
    type: String,
    required: [true, 'Set name for superhero'],
  },
  real_name: {
    type: String,
    required: true,
  },
  origin_description: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
  },
});

const Superhero = model('superhero', superheroSchema);

module.exports = { Superhero };
