const Student= require('../models/student');

function create(req, res, next) {
	const body = req.body;
	const studentNumber = body.studentNumber;
	const name = body.name;
	const surname = body.surname;


	Student.findOne({ studentNumber }, (error, student) => {
		if(error) {
			return next({
				status: 500,
				message: 'An error occured',
				error
			})
		}

		if(student) {
			return next({
				status: 409,
				message: 'User already exists'
			});
		}

		student = new Student({
			studentNumber,
			name,
			surname
		})

		student.save((error, student) => {
		if(error) {
			return res.status(500).json({message: "Student could not be created"});
		}
			res.json({ student });
		});
	});
}

function list(req, res) {
	Student.find({}, (error, students) => {
		if(error) {
			return res.status(500).json('There is an error');
		}
		res.json({ students });
	})
}

module.exports = { create, list };