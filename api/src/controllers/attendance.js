const Attendance = require('../models/attendance');
date, hours, students, teacherId 
function save(req, res) {
	const body = req.body;
	const courseName = body.courseName;
	const date = body.date;
	const students = body.students;
	const teacherId = body. teacherId;

}


module.exports = { save };