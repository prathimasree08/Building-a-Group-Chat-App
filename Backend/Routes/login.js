const express = require('express');
const router = express.Router();

const userController = require('../Controllers/user');
const userAuthenticate = require('../Middleware/auth')


router.post('/user/login', userController.postLoginUser)
router.post('/user/adduser/:groupId',userAuthenticate.authenticate, userController.postAddUser);
router.delete('/user/delete/:id/:groupId', userAuthenticate.authenticate, userController.deleteUser);
router.get('/user/admin/:groupId', userAuthenticate.authenticate, userController.getAdmin)


module.exports = router;