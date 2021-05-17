import express from 'express';
import personRouter from './person/index.mjs';
import serviceMjs from './person/service.mjs';
import passport from 'passport';
import session from 'express-session';
import { auth } from './auth.mjs';
import jwt from 'jsonwebtoken';

const app = express();
// app.set('view engine', 'ejs');

app.use(express.json());
app.use(session({ secret: 'keyboard cat' }));

auth(app);

app.use(express.static('public'));

app.post('/login', passport.authenticate('local'), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  // res.redirect('/person');
  const token = jwt.sign(req.user, 'secret');
  res.send(token);
});

app.use('/person', passport.authenticate('bearer', { session: false }));

app.use('/person', personRouter);

app.listen(8081, () => {
  console.log('Server is listening to http://localhost:8081');
});
