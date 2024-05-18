const router = require('express').Router();

const getgospeltopic = require('./controllers/gospeltopics');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', getgospeltopicsController.getAllgospeltopics);
router.get('/:id', getgospeltopicsController.getgospeltopic);
router.post('/', isAuthenticated, getgospeltopicsController.postgospeltopic);
router.put('/:id', isAuthenticated, getgospeltopicsController.putgospeltopic);
router.delete('/:id', isAuthenticated, getgospeltopicsController.deletegospeltopic);

module.exports = router;