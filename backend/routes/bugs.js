const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Bugs list'));

module.exports = router;
