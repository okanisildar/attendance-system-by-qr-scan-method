const express = require('express');
const attendance = express.Router();
const attendanceController = require('../controllers/attendance');

attendance.post('/', attendanceController.save);

module.exports = attendanceRecords;