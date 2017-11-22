const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
		email: 	{ type: String, unique: true },
		username: String,
		password: String
});

//generates hash
userSchema.methods.generateHash = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = (password) => {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);