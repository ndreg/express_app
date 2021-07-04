const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/show', userController.showUsers);
router.get('/delete', userController.deleteUsers);

module.exports = router;
