const express = require('express');
const users = express.Router();
const userController = require('../controllers/users');

users.post('/get-user', userController.getUser);
users.post('/', userController.registerUser);
users.post('/login', userController.logInUser);
users.put('/update-teacher', userController.updateTeacher);

module.exports = users;