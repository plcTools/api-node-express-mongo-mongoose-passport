const passport = require('passport');
const LocalStrategy = requiere('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    
}))