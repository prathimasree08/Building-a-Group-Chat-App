const express = require('express');
const router = express.Router();

const userAuthenticate = require('../Middleware/auth')
const chatController = require('../Controllers/chat')

// router.get('/chat/users', userAuthenticate.authenticate , chatController.getUsers);
router.get('/chat/chats/:groupId', userAuthenticate.authenticate, chatController.getChat);
router.post('/chat/chats/:groupId', userAuthenticate.authenticate, chatController.postChat);
router.get('/chat/newchats/:groupId', userAuthenticate.authenticate, chatController.getNewChat)

module.exports = router;