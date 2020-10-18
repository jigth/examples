const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index');
});


// Signup Routes
router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true  // Pass request info to handler of the "redirect route"
}));


// Signin Routes
router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', (req, res, next) => {

});


// Profile
router.get('/profile', (req, res, next) => {
    res.render('profile');
});

module.exports = router;