const express = require('express');
const students = express.Router();
const studentController = require('../controllers/students');

students.post('/', studentController.create);
students.get('/', studentController.list);
students.get('/getStudents', studentController.listByCourse);
students.delete('/:id', studentController.destroy);


module.exports = students;
