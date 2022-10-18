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
router.get('/', (req, res) => {
    res.send("API WORKING");
});


module.exports = router