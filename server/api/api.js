var router = require('express').Router();

router.use('/sources', require('./sources/sourcesRoutes'));
router.use('/scrape', require('./scrape/scrapeRoutes'));


module.exports = router;