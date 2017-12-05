const express = require('express');
const users = express.Router();
const userController = require('../controllers/users');

users.post('/', userController.registerUser);
users.post('/login', userController.logInUser);
users.get('/', userController.list);

module.exports = users;