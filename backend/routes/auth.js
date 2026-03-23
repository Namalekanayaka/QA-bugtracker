const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Register
router.post('/register', (req, res) => {
    res.send('Register endpoint');
});

// Login
router.post('/login', (req, res) => {
    res.send('Login endpoint');
});

module.exports = router;
