const StudentModel = require('../models/student');

function create(req, res) {
	const body = req.body;
	const student = new StudentModel({name: body.name, studentNumber: body.studentNumber});

	student.save((error, student) => {
		if(error) {
			return res.status(500).json({message: "Student could not be created"});
		}
		res.json({ student });
	});
}

module.exports = { create };