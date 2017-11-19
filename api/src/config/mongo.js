var mongoose = require('mongoose');

const mongo = { 
	init:() => {
		mongoose.connect('mongodb://localhost:27017/attendance', { useMongoClient: true });
		mongoose.Promise = global.Promise;
	}
}

module.exports = mongo;