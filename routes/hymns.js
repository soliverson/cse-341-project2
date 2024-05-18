const router = require('express').Router();
const hymnsController = require('../controllers/hymns');
const { isAuthenticated } = require('../middleware/authenticate');

// Ensure function names match those defined in the controller
router.get('/', hymnsController.getAll);
router.get('/:id', hymnsController.getSingle);
router.post('/', isAuthenticated, hymnsController.hymnValidation, hymnsController.createHymn);
router.put('/:id', isAuthenticated, hymnsController.hymnValidation, hymnsController.updateHymn);
router.delete('/:id', isAuthenticated, hymnsController.deleteHymn);

module.exports = router;
