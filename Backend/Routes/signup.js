const express = require('express');
const router = express.Router();

const userController = require('../Controllers/user');

router.post('/user/signup', userController.postSignUpUser);

module.exports = router;