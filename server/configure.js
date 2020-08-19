var path = require('path'),
 routes = require('./routes'),
 exphbs = require('express-handlebars'),
 express = require('express'),
 bodyParser = require('body-parser'),
 cookieParser = require('cookie-parser'),
 morgan = require('morgan'),
 methodOverride = require('method-override'),
 errorHandler = require('errorhandler');
 moment = require('moment');
 multer = require('multer');
 upload = multer({ dest: path.join(__dirname,'public/upload/temp')});
 const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
 const Handlebars = require('handlebars');

 module.exports = function(app) {
     app.use(morgan('dev'));
     app.use(bodyParser.urlencoded({'extended':true}));
     app.use(bodyParser.json());
     app.use(upload.single('file'));
     app.use(methodOverride());
     app.use(cookieParser('some-secret-value-here'));
     routes(app);
     // moving the routes to routes folder

     app.use('/public/', express.static(path.join(__dirname,
        '../public')));
       if ('development' === app.get('env')) {
        app.use(errorHandler());
       }
       

       app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        allowProtoMethodsByDefault: true,
        handlebars : allowInsecurePrototypeAccess(Handlebars),
        
        
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function(timestamp) {
            return moment(timestamp).startOf('minute').fromNow();
            }
            }
       }).engine);
       app.set('view engine', 'handlebars');

       
        return app;
       };
       
 