const express = require('express');
const teachers = express.Router();
const teacherController = require('../controllers/teachers');

teachers.post('/get-user', teacherController.getUser);
teachers.post('/', teacherController.registerUser);
teachers.post('/login', teacherController.logInUser);
teachers.put('/update-teacher', teacherController.updateTeacher);
teachers.get('/get-users', teacherController.list);
teachers.delete('/:id', teacherController.destroy);

module.exports = teachers;