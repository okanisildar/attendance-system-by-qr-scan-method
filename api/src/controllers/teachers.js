const TeacherModel = require('../models/teachers');

function list(req, res) {
	TeacherModel.find( (error, teachers) => {
		if(error) {
			return res.status(500).json("Hata");
		}
		res.json({ teachers })
	});
}

function show(req, res) {
	TeacherModel.findById(req.params.id, (error, teacher) => {
		if(error) {
			return res.status(500).json("Hata")
		}
		if(!teacher) {
			return res.status(404).json("Bulunamadı")
		}

		res.json({teacher});
	}) 
}

function create(req, res) {
	const body = req.body;
	const teacher = new TeacherModel({ name: body.name })
	
	teacher.save( (error, teacher) => {
		if(error){
			return res.status(500).json({message: "Hata oluştu"})
		}
		res.json({ teacher });
	});
}

function update(req, res) {
	const body = req.body;

	TeacherModel.findById(req.params.id, (error, teacher) => {
		if(error) {
			return res.status(500).json("Hata")
		}
		if(!teacher) {
			return res.status(404).json("Bulunamadı")
		}

		teacher.name = body.name;

		teacher.save( (error, teacher) => {
			if(error){
				return res.status(500).json({message: "Hata oluştu"})
			}
			res.json({ teacher });
		});
	}); 
}

function destroy(req, res) {
	TeacherModel.findById(req.params.id, (error, teacher) => {
		if(error) {
			return res.status(500).json("Hata")
		}
		if(!teacher) {
			return res.status(404).json("Bulunamadı")
		}

		teacher.remove( (error, teacher) => {
			if(error){
				return res.status(500).json({message: "Hata oluştu"})
			}
			res.json({ succes:true });
		});
	}); 
}

module.exports = { list, show, create, update, destroy };