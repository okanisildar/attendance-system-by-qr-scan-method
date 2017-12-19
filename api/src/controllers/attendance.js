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
			return res.status(500).json('There is an error');
		}
		res.json({ result: 'success' });
	});
}

function getAttendanceRecordsByTeacher(req, res) {
	const body = req.body;
	const teacherId = body.teacherId;
	Attendance.find({'teacherId' :teacherId }, (error, records) => {
		if(error) {
			return res.status(500).json('There is an error', error);
		}
		res.json({ records })
	})
}

function list (req, res) {
	Attendance.find({}, (error, attendances) => {
		if(error) {
			return res.status(500).json('There is an error');
		}
		res.json({ attendances });
	});
}

function destroy(req, res) {
	Attendance.findById(req.params.id, (error, attendance) => {
		if(error) {
			return res.status(500).json('There is an error');
		}
		if(!attendance) {
			return res.status(404).json('Attendance could not found');
		}

		attendance.remove( (error, attendance) => {
			if(error) {
				return res.status(500).json('Attendance could not deleted');
			}
			res.json({ success: true });
		})
	})
}

module.exports = { create, list, getAttendanceRecordsByTeacher, destroy };