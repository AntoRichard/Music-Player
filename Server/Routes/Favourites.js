const express = require('express');
const { getFavourites, postFavourites } = require('../controllers/Favourites');

const Router = express.Router();

Router.get('/favourites', getFavourites);
Router.post('/favourites', postFavourites);

module.exports = Router;