const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
// const { joiSchema, favoriteJoiSchema } = require('../../models');
// const { contacts: ctrl } = require('../../controllers');

// const validateMiddleware = validation(joiSchema);

// router.get('/', ctrlWrapper(ctrl.getAll));

module.exports = router;
