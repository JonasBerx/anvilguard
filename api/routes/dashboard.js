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
//isAuthorized
router.get('/', isAuthorized, (req, res, next) => {
    res.redirect('http://localhost:3001/home')
});


module.exports = router
