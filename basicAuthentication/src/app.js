/** Server configuration */
const express = require('express');
const app = express();
const templateEngine = require('ejs-mate');
const morgan = require('morgan');
const routes = require('./routes/index');
const passport = require('passport');
const session = require('express-session');

const { join } = require('path');

// Initializations
require('./auth/local-auth');

// Settings
app.set('views', join(__dirname, 'views'));
app.engine('ejs', templateEngine);
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));  // Configuration to process form inputs from the server
app.use(session({
    secret: "52fzek_zFc+92LaSrpKda!muLjzh7gdJ",  // Could be configured in environment variable!
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', routes);

module.exports = app;