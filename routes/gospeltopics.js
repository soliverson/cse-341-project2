const router = require('express').Router();
const gospeltopicsController = require('../controllers/gospeltopics');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', gospeltopicsController.getAll);
router.get('/:id', gospeltopicsController.getSingle);
router.post('/', isAuthenticated, gospeltopicsController.gospeltopicValidation, gospeltopicsController.createGospeltopic);
router.put('/:id', isAuthenticated, gospeltopicsController.gospeltopicValidation, gospeltopicsController.updateGospeltopic);
router.delete('/:id', isAuthenticated, gospeltopicsController.deleteGospeltopic);

module.exports = router;
