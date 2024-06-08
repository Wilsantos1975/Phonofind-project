const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const albumsControllers= require('../backend/controllers/albumsControllers');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/albums', albumsControllers);


//health check route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Vinyl Collection API!'});
});

module.exports = app;
