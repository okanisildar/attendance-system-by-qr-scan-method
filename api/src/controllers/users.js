const UserModel = require('../models/users');

function registerUser (req, res, next) {
  const body = req.body;
  const email = body.email;
  const password = body.password;
  const username = body.username;
  
  UserModel.findOne({ email : email }, (error, user) => {
    if (error) {
      return next({
        status: 500,
        message: 'An error occurred!',
        error,
      })
    }
    if (user) {
      return next({
        status: 409,
        message: 'User already exists',
      })
    }

    user = new UserModel({
      email,
      username,
      password,
    })

    return user.save((error, user) => {
      if (error) {
        return next({
          status: 500,
          message: 'An error occurred!',
          error,
        })
      }

      const token = {id: user.id}

      return res.json({
        token,
      })
    })
  })
}

module.exports = { registerUser };