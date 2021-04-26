const express = require('express');
const engine = require('ejs-mate');
const path = require ('path')
const morgan = require('morgan');
const passport = require('passport');
const session =require('express-session');
const flash = require('connect-flash')
const cors = require( 'cors');

//services initializations
const app = express();
require('./database')
require('./passport/local-auth')

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);//views engine
app.set('view engine','ejs');//views
app.set( 'port', process.env.PORT || 3000 );

//middlewares
app.use(cors({origin:"http://localhost:3000", credentials:true}))
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: "30mb", extended:true }));
app.use(session({
    secret:'mysecretsession',
    resave:false,
    saveUninitialized:false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next();
})

//routes
app.use('/', require('./routes/index'));


//startings
app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'))
})