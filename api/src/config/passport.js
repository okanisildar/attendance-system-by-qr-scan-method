const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user.username);
	});

	passport.deserializeUser((user, done)=> {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		username: 'username',
		password: 'password',
		passReqToCallback: true
	},
	
	function(req, username, password, done) {
		process.nextTick(()=> {
			User.findOne({'local.username': username}, (err, user) => {
				if(err) { return done(err) }
				if(user) {
					return done(null, false, {message: 'That is already taken'});
				} else {
					const newUser = new User();
					newUser.local.username = username;
					newUser.local.password = newUser.generateHash(password);

					//save the user
					newUser.save((err) => {
						if(err) {throw err }
						return done(null, newUser);
					})
				}
			})
		})
	}
	))
} 