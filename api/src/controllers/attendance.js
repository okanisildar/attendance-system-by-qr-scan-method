const Attendance = require('../models/attendance');

function create(req, res) {
	const body = req.body;
	const courseName = body.courseName;
	const date = body.date;
	const students = body.students;
	const teacherId = body. teacherId;
	
	const attendance = new Attendance({ courseName, date, students, teacherId });

	attendance.save((error, attendance) => {
		if(error) {
			return res.status(500).json("There is an error");
		}
		res.json({ result: 'success' });
	});
}

function getAttendanceRecordsByTeacher(req, res) {
	const body = req.body;
	const teacherId = body.teacherId;
	Attendance.find({'teacherId' :teacherId }, (error, records) => {
		if(error) {
			return res.status(500).json("There is an error", error);
		}
		res.json({ records })
	})
}

function list (req, res) {
	Attendance.find({}, (error, attendances) => {
		if(error) {
			console.log(error)
			return res.status(500).json("There is an error");
		}
		res.json({ attendances });
	});
}


module.exports = { create, list, getAttendanceRecordsByTeacher };