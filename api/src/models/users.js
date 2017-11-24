const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
		email: 	{ type: String, unique: true },
		username: String,
		password: String
});

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