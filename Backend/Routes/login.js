const express = require('express');
const router = express.Router();

const userController = require('../Controllers/user');


router.post('/user/login', userController.postLoginUser)


module.exports = router;