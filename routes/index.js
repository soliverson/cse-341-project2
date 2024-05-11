const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');});

router.use('/hymns', require('./hymns'));

router.use('/gospeltopics', require('./gospeltopics'));


module.exports = router;