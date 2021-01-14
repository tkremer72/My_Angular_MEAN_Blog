const express = require('express');

const authControl = require('../controllers/auth.controller');

const router = express.Router();

router.post('/registration', authControl.register_user);
router.post('/login', authControl.login_user);
module.exports = router;
