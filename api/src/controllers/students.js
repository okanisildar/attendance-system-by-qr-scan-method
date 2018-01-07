const Student= require('../models/student');

function create(req, res, next) {
	const body = req.body;
	const studentNumber = body.studentNumber;
	const name = body.studentName;
	const surname = body.studentSurname;
	const courses = body.courses;


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
			surname,
			courses
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

function listByCourse(req, res) {
	const body = req.body;
	const courseName = body.courseName;
	Student.find({ courseName: courseName }, (error, students) => {
		if(error) {
			return res.status(500).json('There is an error', error);
		}
		res.json({ students });
	})
}

function destroy(req, res) {
	Student.findById(req.params.id, (error, student) => {
		if(error) {
			return res.status(500).json('There is an error');
		}
		if(!student) {
			return res.status(404).json('Student could not found');
		}

		student.remove( (error, student) => {
			if(error) {
				res.status(500).json('Student could not deleted');
			}
			res.json({ success: true })
		})
	})
}

module.exports = { create, list, destroy, listByCourse };