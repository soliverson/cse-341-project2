const express = require('express');
const router = express.Router();

const gospeltopicsController = require('../controllers/gospeltopics');

router.get('/', gospeltopicsController.getAll);

router.get('/:id', gospeltopicsController.getSingle);

module.exports = router;