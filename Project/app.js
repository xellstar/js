var express = require('express');

var index = require('./routes/index');
const config = require('./config/config');
var app = express();


require('./config/express')(app, config['development']);
require('./config/database')(config['development']);
require('./config/passport')();
require('./config/route')(app);


module.exports = app;
