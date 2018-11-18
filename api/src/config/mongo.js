const mongoose = require('mongoose');
const mongoURI = 'mongodb://mymongodb/attendance_system'

//mongodb://localhost:27017/attendance

const mongo = { 
	init:() => {
		mongoose.connect(mongoURI, { useMongoClient: true });
		mongoose.Promise = global.Promise;
	}
}

module.exports = mongo;
