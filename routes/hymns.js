const router = require('express').Router();
const hymnsController = require('../controllers/hymns');
const { isAuthenticated } = require('../middleware/authenticate');
const { hymnValidation } = require('../middleware/validate');

router.get('/', hymnsController.getAll);
router.get('/:id', hymnsController.getSingle);
router.post('/', isAuthenticated, hymnValidation, hymnsController.createHymn);
router.put('/:id', isAuthenticated, hymnValidation, hymnsController.updateHymn);
router.delete('/:id', isAuthenticated, hymnsController.deleteHymn);

module.exports = router;