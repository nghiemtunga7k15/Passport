var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else{
        res.render('login')
    }
});

router.get('/thanhcong', function(req, res, next) {
 	res.send('ok');
});
router.get('/login', function(req, res, next) {
  res.render('login')
});
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // User.findById(id, function(err, user) {
    done(err, user);
  // });
});

router.post('/login', passport.authenticate('local', { successRedirect: '/thanhcong',
                                                    failureRedirect: '/login' }));
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
  function(email, password, done) {
    user = {
      name : "nghiemtunga7k15@gmail.com",
      pass : "123"
    }
    if(email == 'nghiemtunga7k15@gmail.com' &&  password == "123"){
        return done(null,user)
    }
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
));
module.exports = router;
