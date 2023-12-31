const express = require('express');
const router = express.Router();

const userController = require('../Controllers/user');
const userAuthenticate = require('../Middleware/auth')

router.post('/signup', userController.postSignUpUser);
router.post('/login', userController.postLoginUser);
router.post('/adduser/:groupId',userAuthenticate.authenticate, userController.postAddUser);
router.delete('/delete/:id/:groupId', userAuthenticate.authenticate, userController.deleteUser);
router.get('/admin/:groupId', userAuthenticate.authenticate, userController.getAdmin)

module.exports = router;