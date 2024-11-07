const { Router } = require('express');

const router = Router();
const climberController = require('../controllers/climberController');

router.get('/', climberController.climbersList);

module.exports = router;