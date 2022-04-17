const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../middlewares');
const { superheroes: ctrl } = require('../../controllers');

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:superheroId', ctrlWrapper(ctrl.getHero));

router.post('/', ctrlWrapper(ctrl.create));

router.delete('/:superheroId', ctrlWrapper(ctrl.remove));

router.put('/:superheroId', ctrlWrapper(ctrl.edit));

module.exports = router;
