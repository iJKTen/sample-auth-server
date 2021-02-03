'use strict';

const compression = require('compression');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3001'
};

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type'
    );
    res.header(
        'Access-Control-Allow-Origin',
        'http://localhost:3001'
    );
    next();
});

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).send({ 'message': 'Resource not found' });
});

app.use((err, req, res, next) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    }

    return res.status(err.statusCode).json({ 'message': err.message });
});

module.exports = app;
