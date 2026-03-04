const express = require('express');
const router = express.Router();
// Yahan hum controller se dono functions nikaal rahe hain
const { register, login } = require('../controllers/authController');

// Routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;