const express = require('express');
const app = express();


const port = 8000;
const db = require('./config/mongoose')

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/styles', express.static('home'));

app.use('/styles', express.static(__dirname + '/styles'));


//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy')


app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`HTTP CONNECTED http://localhost:${port}`);
})
