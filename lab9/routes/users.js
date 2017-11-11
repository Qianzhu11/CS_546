const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

router.get('/', (req, res) => {
    if (req.username) res.redirect('/private');
    else res.render('/user/static', {message: req.flash('message')});
});

router.post('/login', passport.authenticate('local', {successRedirect: '/user/private',
                                                      failureRedirect: '/',
                                                      failureFlash: true
}));

router.get("/private", (req, res, next) => {
	res.render("user/private", req.user);
});

module.exports = router;