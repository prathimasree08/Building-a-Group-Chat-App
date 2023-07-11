const express = require('express');
const router = express.Router();

const userController = require('../Controllers/signup');

router.post('/user/signup', userController.postSignUpUser);

module.exports = router;