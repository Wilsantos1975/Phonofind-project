const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const vinylsController = require('./controllers/vinylsController');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/vinyls', vinylsController);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Vinyl Collection API!'});
});

module.exports = app;
