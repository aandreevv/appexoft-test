const express = require('express');

const router = express.Router();
const { getFreeSystemMemory } = require('../controllers/healthController');

router.get('/', getFreeSystemMemory);

module.exports = router;
