const express = require('express');
const {AuthPost} = require('../controllers/Auth');
const Router = express.Router();


Router.post('/auth',AuthPost);

module.exports = Router;