const express = require('express');
const users = express.Router();
const userController = require('../controllers/users');

users.post('/get-user', userController.getUser);
users.post('/', userController.registerUser);
users.post('/login', userController.logInUser);
users.put('/update-teacher', userController.updateTeacher);
users.get('/get-users', userController.list);
users.delete('/:id', userController.destroy);

module.exports = users;