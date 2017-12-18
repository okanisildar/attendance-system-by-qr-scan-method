'use strict'
const validator = require('validator');

const User = require('../models/users');
const jwt = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');

const generateToken = user => jwt.sign(user, 'secretkey' , { expiresIn: '1y' })

/*function validateInput(data) {
  let errors = {};

  if(validator.isNull(data.email)) {
    errors.email = 'This field is required'
  }

  if(validator.isNull(data.password)) {
    errors.password = 'This field is required'
  }

  if(validator.isNull(data.name)) {
    errors.name = 'This field is required'
  }

  if(validator.isNull(data.surname)) {
    errors.surname = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}*/

function registerUser (req, res, next) {
  /*const errors = validateInput(req.body.errors);
  const isValid = validateInput(req.body.isValid);

  if(!isValid) {
    res.status(400).json(errors);
  }*/

  const body = req.body;
  const email = body.email;
  const name = body.name;
  const surname = body.surname;
  const password = body.password;

  User.findOne({ email }, (error, user) => {
    if(error) {
      return next({
        status: 500,
        message: 'An error occured!',
        error
      })
    }

    if(user) {
      return next({
        status: 409,
        message: 'User already exists'
      })
    }

    user = new User({
      email,
      password,
      name,
      surname
    })

    return user.save((error, user) => {
      if(error) {
        return next({
          status:500,
          message: 'An error occurred',
          error
        })
      }

      const token = generateToken({
        id: user.id
      })
      return res.json({
        token
      })
    })
  })

}

function logInUser (req, res, next) {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ email: email }, (error, user) => {
    if (error) {
      return next({
        status: 500,
        message: 'An error occurred!',
        error,
      })
    }

    if (!user) {
      return next({
        status: 404,
        message: 'No User Found',
      })
    }

    user.comparePassword(password, (error, isMatch) => {
      if (error) {
        return next({
          status: 500,
          message: 'An error occurred!',
          error,
        })
      }

      if (!isMatch) {
        return next({
          status: 401,
          message: 'Wrong Password',
        })
      }

      /*const token = generateToken({
        id: user.id,
      })*/
      return res.json({
        user
      })
    })
  })
}

function updateTeacher (req, res) {
  const body = req.body;
  User.findById(req.body._id, (error, user) => {
    if(error) {
      return res.send(500).json("Error");
    }
    if(!user) {
      return res.status(404).json("User can not found");
    }
    user.name = body.name;
    user.surname = body.surname;
    
    user.save((error, user) => {
      if(error) {
        return res.send(500).json({message: "Could not saved"})
      }
      res.json({ user });
    });
  });
}

function getUser (req, res) {
  User.findById(req.body._id, (error, user) => {
    if(error) {
      return res.send(500).json("Error");
    }
    if(!user) {
      return res.status(404).json("User can not found");
    }
    res.json({ user });
  });
}

function list (req, res) {
  User.find({},  (error, users) => {
    if(error) {
      return res.send(500).json("There is an error");
    }
    res.json({ users });
  })
}

function destroy(req, res) {
  User.findById(req.params.id, (error, user) => {
    if(error) {
      return res.status(500).json("There is an error");
    }
    if(!user) {
      return res.status(404).json("User could not found");
    }

    user.remove( (error, user) => {
      if(error) {
        return res.status(500).json("User could not deleted");
      }
      res.json({ success: true });
    });
  });
}

module.exports = { registerUser, logInUser, updateTeacher, getUser, list, destroy };