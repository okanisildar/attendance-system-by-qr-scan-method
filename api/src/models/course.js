const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
		courseCode: 	{ type: String, unique: true },
		name: {
      type: String,
      required: true
    }
});


module.exports = mongoose.model('Course', courseSchema);