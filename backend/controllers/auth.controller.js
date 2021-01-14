const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const Auth = require('../models/auth.model');
const User = require('../models/user.model');

//Create a user
exports.register_user = async(req, res, next) => {
  try {
    bcrypt.hash(req.body.user_password, 10)
    .then(hash => {
      const payload = {
        _id: new mongoose.Types.ObjectId().toHexString(),
        first_name: 'John',
        last_name: 'Doe',
        user_email: req.body.user_email,
        user_password: hash,
        user_name: 'Username',
        user_street: '433 Your street goes here.',
        user_city: 'Your City',
        user_state: 'NC',
        user_zip: '55555',
        user_phone: '(999)999-9999',
        user_mobile: '(999)999-9999',
        imagePath: 'http://bingbing/bang.com',
        is_admin: false,
        is_deleted: false,
        user_id: mongoose.Types.ObjectId().toHexString(),
      }
      const user =  Auth.create(payload);
       User.create(payload);
       console.log(payload);
       res.status(201).json({
        result: payload,
        message: 'User was created!'
      })
    })
  } catch(err) {
    res.status(500).json({
      message: 'There has been an error, please try again later. '
    })
  }
}

exports.login_user = (req, res, next) => {
  let fetchedUser;
  Auth.findOne({ user_email: req.body.user_email })
  .then(user => {
    if(!user) {
      return res.status(404).json({
        message: 'Could not find user, please check your email and try again.'
      });
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.user_password, user.user_password);
  })
  .then(result => {
    if(!result) {
      return res.status(404).json({
        message: 'Authorization failed, please try again later.'
      })
    }
    const token = jwt.sign({
      user_email: fetchedUser.user_email, userId: fetchedUser._id
    },
    process.env.JWT,
    {
      expiresIn: '1h'
    });
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id
    });
  }).catch(err => {
    return res.status(404).json({
      message: 'Ivalid authentication credentials, please verify your information and try again.'
    })
  })
}
