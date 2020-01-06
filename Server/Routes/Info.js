const express = require('express');
const Router = express.Router();

const {postInfo} = require('../controllers/Info');

Router.post('/info',postInfo);

module.exports = Router;