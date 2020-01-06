const express = require('express');
const path = require('path');
const { getRegister, postRegister } = require(path.join('..','controllers','Register'));

const Route = express.Router();

Route.get('/register', getRegister);
Route.post('/register',postRegister);


module.exports = Route;