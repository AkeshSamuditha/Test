const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.userGetAllUsers);

router.post('/createUser', userController.userCreateUser);

module.exports = router;

