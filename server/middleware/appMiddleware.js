var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app){
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use(cors());
};