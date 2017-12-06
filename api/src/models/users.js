const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
		email: 	{ type: String, unique: true },
		password: String,
    name: String,
    surname: String
});

userSchema.pre('save', function(next) {
  const user = this;
  const SALT_FACTOR = 5;

  if(!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if(err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) {
        return next(err)
      }

      user.password = hash;
      next();
    })
  })
})


userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
  	console.log(err)
    if (err) {
      return cb(err)
    }

    cb(null, isMatch)
  })
}
module.exports = mongoose.model('User', userSchema);