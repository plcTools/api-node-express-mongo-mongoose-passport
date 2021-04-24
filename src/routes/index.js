const router = require('express').Router();
/* const router = express.Router(); */

//passport
const passport = require('passport')


router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
    res.render('signup')
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));


router.get('/profile', (req, res, next) => {
    res.render('profile');
});

module.exports = router;