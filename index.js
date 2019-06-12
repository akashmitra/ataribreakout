(function () {

    const express  = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const http = require('http');

    const logger = require('./log');

    const port = process.env.PORT || 3000;
    process.env.DEBUG = 'phaser:debug';

    var app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));


    // Creating a server at port 
    http.createServer(app).listen(port, () => {
        logger.trace(`Express server listening on port ${port}`);
    });

}());


