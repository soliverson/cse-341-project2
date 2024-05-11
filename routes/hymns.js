const express = require('express');
const router = express.Router();

const hymnsController = require('../controllers/hymns');

router.get('/', hymnsController.getAll);

router.get('/:id', hymnsController.getSingle);

module.exports = router;