
var router = require('express').Router();
var controller = require('./scrapeController');

router.route('/')
    .get(controller.get)
    .post(controller.post)

module.exports = router;