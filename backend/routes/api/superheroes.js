const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../middlewares');
const { superheroes: ctrl } = require('../../controllers');

router.get('/', ctrlWrapper(ctrl.getAll));

router.post('/');

module.exports = router;
