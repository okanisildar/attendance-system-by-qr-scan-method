const express = require('express');
const students = express.Router();
const studentController = require('../controllers/students');

students.post('/', studentController.create);
students.get('/', studentController.list),

module.exports = students;
