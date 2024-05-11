const express = require('express');
const router = express.Router();

const hymnsController = require('../controllers/hymns');

router.get('/', hymnsController.getAll);

router.get('/:id', hymnsController.getSingle);

router.post('/',hymnsController.createHymn);
router.put('/:id', hymnsController.updateHymn);
router.delete('/:id', hymnsController.deleteHymn);


module.exports = router;