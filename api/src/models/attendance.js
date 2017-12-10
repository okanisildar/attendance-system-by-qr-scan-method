const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
	courseName: String,
	date: String,
	hours: String,
	students: [],
	teacherId: String
});

module.exports = mongoose.model('Attendance', attendanceSchema);