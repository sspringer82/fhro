import { Strategy as LocalStrategy } from 'passport-local';
// import { Strategy as BearerStrategy } from 'passport-http-bearer';
import BearerStrategy from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import passport from 'passport';

export function auth(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      if ((username = 'admin' && password === 'geheim')) {
        done(null, { username: 'admin', id: 1 });
      } else {
        return done(null, false, { message: 'Wrong Credentials.' });
      }
    }),
  );

  passport.use(
    new BearerStrategy((token, done) => {
      jwt.verify(token, 'secret', (err, decodedToken) => {
        if (err) {
          return done(err);
        } else {
          return done(null, decodedToken);
        }
      });
    }),
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    done(null, { id: 1, username: 'admin' });
  });

  // here starts jwt
}
