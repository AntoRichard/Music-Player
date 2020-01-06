const express = require('express');
const {loginGet, loginPost} = require('../controllers/Login');

const Router = express.Router();

Router.get('/login',loginGet);
Router.post('/login',loginPost);

module.exports = Router;