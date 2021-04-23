const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
});


//user register midelware
passport.use('local-signup', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();//the saved method take time for finish, use async/await
    done(null, newUser); //return null for errors and user in case of success
}));