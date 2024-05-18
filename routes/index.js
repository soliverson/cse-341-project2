const router = require('express').Router();


router.use('/', require('./swagger'));
router.use('/hymns', require('./hymns'));
router.use('/gospeltopics', require('./gospeltopics'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;