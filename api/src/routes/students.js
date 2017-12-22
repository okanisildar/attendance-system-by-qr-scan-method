const express = require('express');
const students = express.Router();
const studentController = require('../controllers/students');

students.post('/', studentController.create);
students.get('/', studentController.list);
students.get('/getStudent', studentController.listByCourse);
students.delete('/:id', studentController.destroy);


module.exports = students;
