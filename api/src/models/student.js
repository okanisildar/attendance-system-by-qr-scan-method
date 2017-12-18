const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	studentNumber: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	courses: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Student', studentSchema);