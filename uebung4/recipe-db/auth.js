const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    if (username === 'admin' && password === 'geheim') {
      done(null, { id: 1, username: 'admin' });
    } else {
      done('NO!');
    }
  }),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, { id: 1, username: 'admin' });
});

module.exports = {
  passport,
  ensureLoggedIn() {
    return function (req, res, next) {
      // isAuthenticated is set by `deserializeUser()`
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        res.status(401).send({
          success: false,
          message: 'You need to be authenticated to access this page!',
        });
      } else {
        next();
      }
    };
  },
};
