const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/show', userController.showUsers);
router.delete('/delete/:id', userController.deleteUsers);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);

module.exports = router;
