const router = require('express').Router();
const passport = require('passport')
const url = require('url');


router.get('/', passport.authenticate('discord'));
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
    successRedirect: '/auth/success'
}));

router.get('/success', (req, res, next) => {
    res.redirect(url.format({
        pathname: "http://localhost:3001/",
    }));
});


module.exports = router
