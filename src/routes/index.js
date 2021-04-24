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
    failureFlash: true
}));

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/')
})

//function for test if user is authenticated
function isAuthenticated(req, res, next) {  
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

/* this middleware protect all routes down this */
router.use((req, res, next) => {
   console.log('Autenticated user: ', req.isAuthenticated()) 
    isAuthenticated(req, res, next);
    next();
})


router.get('/profile', (req, res, next) => {
    res.render('profile');
});





module.exports = router;