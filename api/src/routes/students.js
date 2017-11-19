const express = require('express');
const students = express.Router();
const studentController = require('../controllers/students');

students.post('/', studentController.create);

module.exports = students;
