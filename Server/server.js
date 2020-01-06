const express = require('express');
const morgan = require('morgan');
const Database = require('./Database/Database');

new Database().databaseConnection();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const PORT = 5000;

app.use(require('./Routes/Register'));
app.use(require('./Routes/Login'));
app.use(require('./Routes/Favourites'));
app.use(require('./Routes/Auth'));
app.use(require('./Routes/Info'));
app.use(require('./Routes/DeleteUser'));

app.use((req,res,next) => res.status(404).json({msg: 'PAGE NOT FOUND'}));

app.listen(PORT, console.log(`Server running in PORT : ${PORT}`));