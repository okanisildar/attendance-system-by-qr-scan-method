const express = require('express');
const teachers = express.Router();
const teacherController = require('../controllers/teachers');

teachers.get('/', teacherController.list);
teachers.get('/:id' , teacherController.show);
teachers.post('/', teacherController.create);
teachers.put('/:id', teacherController.update);
teachers.delete('/:id', teacherController.destroy);

module.exports = teachers;