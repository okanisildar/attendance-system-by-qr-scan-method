'use strict'
const Teacher = require('../models/teachers');
const jwt = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');

const generateToken = teacher => jwt.sign(teacher, 'secretkey' , { expiresIn: '1y' })

function registerUser (req, res, next) {
  
  const body = req.body;
  const email = body.email;
  const name = body.name;
  const surname = body.surname;
  const password = body.password;

  Teacher.findOne({ email }, (error, teacher) => {
    if(error) {
      return next({
        status: 500,
        message: 'An error occured!',
        error
      })
    }

    if(teacher) {
      return next({
        status: 409,
        message: 'Teacher already exists'
      })
    }

    teacher = new Teacher({
      email,
      password,
      name,
      surname
    })

    return teacher.save((error, teacher) => {
      if(error) {
        return next({
          status:500,
          message: 'An error occurred',
          error
        })
      }

      const token = generateToken({
        id: teacher.id
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

  Teacher.findOne({ email: email }, (error, teacher) => {
    if (error) {
      return next({
        status: 500,
        message: 'An error occurred!',
        error,
      })
    }

    if (!teacher) {
      return next({
        status: 404,
        message: 'No Teacher Found',
      })
    }

    teacher.comparePassword(password, (error, isMatch) => {
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

      return res.json({
        teacher
      })
    })
  })
}

function updateTeacher (req, res) {
  const body = req.body;
  Teacher.findById(req.body._id, (error, teacher) => {
    if(error) {
      return res.send(500).json("Error");
    }
    if(!teacher) {
      return res.status(404).json("Teacher can not found");
    }
    teacher.name = body.name;
    teacher.surname = body.surname;
    
    teacher.save((error, teacher) => {
      if(error) {
        return res.send(500).json({message: "Could not saved"})
      }
      res.json({ teacher });
    });
  });
}

function getUser (req, res) {
  Teacher.findById(req.body._id, (error, teacher) => {
    if(error) {
      return res.send(500).json("Error");
    }
    if(!teacher) {
      return res.status(404).json("Teacher can not found");
    }
    res.json({ teacher });
  });
}

function list (req, res) {
  Teacher.find({},  (error, teachers) => {
    if(error) {
      return res.send(500).json("There is an error");
    }
    res.json({ teachers });
  })
}

function destroy(req, res) {
  Teacher.findById(req.params.id, (error, teacher) => {
    if(error) {
      return res.status(500).json("There is an error");
    }
    if(!teacher) {
      return res.status(404).json("Teacher could not found");
    }

    teacher.remove( (error, teacher) => {
      if(error) {
        return res.status(500).json("Teacher could not deleted");
      }
      res.json({ success: true });
    });
  });
}

module.exports = { registerUser, logInUser, updateTeacher, getUser, list, destroy };