var express = require('express'),
// config = require('./server/configure'),
app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
// app = config(app);