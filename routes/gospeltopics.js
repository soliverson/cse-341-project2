const express = require('express');
const router = express.Router();

const gospeltopicsController = require('../controllers/gospeltopics');

router.get('/', gospeltopicsController.getAll);

router.get('/:id', gospeltopicsController.getSingle);

router.post('/',gospeltopicsController.createGospeltopic);
router.put('/:id', gospeltopicsController.updateGospeltopic);
router.delete('/:id', gospeltopicsController.deleteGospeltopic);

module.exports = router;