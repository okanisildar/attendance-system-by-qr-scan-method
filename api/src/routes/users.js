const express = require('express');
const users = express.Router();
const userController = require('../controllers/users');

users.post('/register', userController.registerUser);
users.post('/login', userController.logInUser);

module.exports = users;