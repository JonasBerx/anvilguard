const router = require('express').Router();


function isAuthorized(req, res, next) {
    if (req.user) {
        console.log("Logged in.");
        next();
    }
    else {
        console.log("Not logged in");
        res.redirect('/')
    }
}
router.get('/', (req, res, next) => {
    res.send("gamer")
});


module.exports = router
