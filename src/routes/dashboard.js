const router = require('express').Router();

function isAuthorized(req,res,next) {
    if(req.user) {
        console.log("Logged in.");
        next();
    }
    else {
        console.log("Not logged in");
        res.redirect('/')
    }
}

router.get('/', isAuthorized, (req, res) => {
    res.send(200);
});


module.exports = router