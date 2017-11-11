const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

router.get('/', (req, res) => {
    if (req.username) res.redirect('/user/private');
    else res.render('/user/static')
});

router.post('/login', passport.authenticate('local', {successRedirect: '/user/private',
                                                      failureRedirect: '/',
                                                      failureFlash: true
}));

router.get('/private', )