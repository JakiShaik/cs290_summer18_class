const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  // Local Strategy
  passport.use(new LocalStrategy(function (username, password, done) {
    // Match Username
    models.User.validateUserLogin(username, (err, result) => {
      if (err) throw err;
      if (result.length == 0) {
        return done(null, false, { message: 'This email is not registered. Please contact your admin.' });
      }
      else {
        // Match Password
        bcrypt.compare(password, result[0].PASSWORDHASH, function (err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            var user = {
              ID: result[0].ID,
              ADMIN: result[0].ADMIN,
              FIRSTLOGIN: result[0].FIRSTLOGIN,
              FIRSTNAME: result[0].FIRSTNAME
            };
            return done(null, user);
          } else {
            return done(null, false, { message: 'You have entered an incorrect password. Please try again.' });
          }

        });
      }
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.ID);
  });

  passport.deserializeUser(function (id, done) {
    models.User.load(id, function (err, result) {
      if (err || !result.length) { done(err, null); }
      else {
        var user = {
          ID: result[0].ID,
          ADMIN: result[0].ADMIN,
          FIRSTLOGIN: result[0].FIRSTLOGIN,
          FIRSTNAME: result[0].FIRSTNAME,
          EMAIL: result[0].EMAILADDRESS
        };
        done(err, user);
      }
    });
  });
}