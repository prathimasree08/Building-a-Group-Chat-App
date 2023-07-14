const express = require('express');
const router = express.Router();

const userAuthenticate = require('../Middleware/auth')
const groupController = require('../Controllers/group')

router.get('/group/usergroup', userAuthenticate.authenticate, groupController.getGroup);
router.post('/group/newgroup', userAuthenticate.authenticate , groupController.postGroup);
router.get('/group/getuser/:groupId', userAuthenticate.authenticate, groupController.getUser)

module.exports = router;