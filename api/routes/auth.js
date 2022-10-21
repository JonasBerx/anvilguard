const router = require('express').Router();
const passport = require('passport')
const querystring = require('querystring');


router.get('/', passport.authenticate('discord'));
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
    successRedirect: '/auth/success'
}));

router.get('/success', (req, res, next) => {
    console.log("----");
    console.log(req.user.accessToken);
    console.log(req.user.discordId);
    console.log(req);
    console.log("----");


    const query = querystring.stringify({
        "username": req.user.username,
        "discordid": req.user.discordId
    });
    res.redirect("http://localhost:3001/?" + query);

});


module.exports = router
