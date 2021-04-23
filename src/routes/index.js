const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
res.render('index');
});

router.get('/signup', (req,res,next) => {
    res.render('signup')
});

router.post('/signup', (req,res,next) => {
    console.log(req.body)
    res.send('hecho')
});
router.get('/signin', (req,res,next) => {
    
});

router.post('/signup', (req,res,next) => {
    
});

module.exports = router;