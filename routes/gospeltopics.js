const router = require('express').Router();
const gospeltopicsController = require('../controllers/gospeltopics');
const { isAuthenticated } = require('../middleware/authenticate');
const { gospeltopicValidation } = require('../middleware/validate');

router.get('/', gospeltopicsController.getAll);
router.get('/:id', gospeltopicsController.getSingle);
router.post('/', isAuthenticated, gospeltopicValidation, gospeltopicsController.createGospeltopic);
router.put('/:id', isAuthenticated, gospeltopicValidation, gospeltopicsController.updateGospeltopic);
router.delete('/:id', isAuthenticated, gospeltopicsController.deleteGospeltopic);

module.exports = router;
