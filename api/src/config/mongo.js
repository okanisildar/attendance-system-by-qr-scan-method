const mongoose = require('mongoose');
const mongoURI = 'mongodb://admin:password@ds131997.mlab.com:31997/attendance_system'

//mongodb://localhost:27017/attendance

const mongo = { 
	init:() => {
		mongoose.connect(mongoURI, { useMongoClient: true });
		mongoose.Promise = global.Promise;
	}
}

module.exports = mongo;