
var router = require('express').Router();
var controller = require('./scrapeController');

router.route('/')
    .post(controller.post)

module.exports = router;