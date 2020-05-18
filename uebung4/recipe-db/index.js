const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const recipeRouter = require('./recipe');
const logger = require('./logger');
const { passport, ensureLoggedIn } = require('./auth');

const app = express();

app.set('view engine', 'ejs');
app.use(logger());
app.use(express.static('public'));
app.use(cookieParser());
app.use(
  session({ secret: 'keyboard cat', saveUninitialized: true, resave: true }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/recipe',
    failureRedirect: '/login.html',
    failureFlash: true,
  }),
);

app.use('/recipe', ensureLoggedIn(), recipeRouter);

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080'),
);
