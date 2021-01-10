const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const locations_controller = require('../controllers/locations.controller');

router.get('/test/image', locations_controller.test);
module.exports = router;
