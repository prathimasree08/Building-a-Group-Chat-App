const express = require('express');
const router = express.Router();

const userAuthenticate = require('../Middleware/auth')
const chatController = require('../Controllers/chat')

router.get(
    "/chat/users", 
    userAuthenticate.authenticate , 
    chatController.getUsers);
// router.get('/chats', userAuthenticate.authenticate, chatController.getChat)
router.post(
    "/chat/chats", 
    userAuthenticate.authenticate, 
    chatController.postChat);

module.exports = router;