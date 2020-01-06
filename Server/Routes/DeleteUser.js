const express = require('express');
const {getDelete, postDelete} = require('../controllers/DeleteUser');

const Router = express.Router();

Router.get('/delete/:email',getDelete);
Router.post('/delete',postDelete);

module.exports = Router;