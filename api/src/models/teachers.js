const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const teacherSchema = new mongoose.Schema({
		email: 	{ type: String, unique: true },
		password: String,
    name: String,
    surname: String
});

teacherSchema.pre('save', function(next) {
  const teacher = this;
  const SALT_FACTOR = 5;

  if(!teacher.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if(err) {
      return next(err)
    }

    bcrypt.hash(teacher.password, salt, null, (err, hash) => {
      if(err) {
        return next(err)
      }

      teacher.password = hash;
      next();
    })
  })
})


teacherSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    }

    cb(null, isMatch)
  })
}
module.exports = mongoose.model('Teacher', teacherSchema);