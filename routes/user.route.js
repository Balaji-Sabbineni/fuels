const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get a single user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/:id', userController.updateUser);

// Delete a user by ID
router.delete('/:id', userController.deleteUser);

// Add assets to a user
router.patch('/:id/assets', userController.addAssetsToUser);

module.exports = router;