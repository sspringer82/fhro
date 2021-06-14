import { Strategy as LocalStrategy } from 'passport-local';
// import { Strategy as BearerStrategy } from 'passport-http-bearer';
import BearerStrategy from 'passport-http-bearer';
import GoogleStrategy from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./data/data.sqlite3');

export function auth(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      db.get(
        'SELECT id, firstname, lastname FROM Person WHERE username = ? AND password = ?',
        [username, password],
        (error, data) => {
          if (error) {
            done(null, false, { message: 'Wrong Credentials.' });
          } else {
            done(null, data);
          }
        },
      );
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
    // @todo fix later
    done(null, { id: 1, username: 'admin' });
  });
}
