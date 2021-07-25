const express = require('express');
const routerController = require('../controller/person');

const router = express.Router();

router.post('/person', routerController.createPerson);

module.exports = router;