var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const passport = require('passport');
const session = require('express-session');

module.exports = (app, config) => {
    app.set('views', path.join(config.rootFolder, 'views'));
    app.set('view engine', 'hbs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cookieParser());
    app.use(session({secret: 's3cr3t5tr1ng', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if(req.user){
            res.locals.user = req.user;
        }

        next();
    });

    app.use(express.static(path.join(config.root, 'public')));
};
