var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) {
        res.redirect('/home');
    }else{
    	res.redirect('/login');
    }
});
router.get('/home', function(req, res, next) {
	if(req.user){
		console.log(req.user.type);
	}else{
		console.log('Không có')
	}
	if (req.isAuthenticated() && req.user.type == 2) {
  		res.render('index', { });
    }else{
    	console.log('Bạn không có quyền')
    	res.redirect('/login');
    }
});
router.get('/login', function(req, res, next) {
  	res.render('error', {});
});
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
passport.use(new LocalStrategy(

  function(username, password, done) {
	  	 user = {
	      name : "nghiemtunga7k15@gmail.com",
	      pass : "123",
	      type :1
	    }
    	if(username == 'tung' && password == '123'){
    		return done(null,user)
    	}else{
    		return done(null, false);
    	}
  }
));
module.exports = router;
