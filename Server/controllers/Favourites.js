const Database = require('../Database/Database');
const {ReadFile, WriteFile} = require('../Utils/File');


exports.getFavourites = async (req, res, next) => {
    res.status(200).json({
        msg: 'success'
    })
}



exports.postFavourites = async (req, res, next) => {



    const { favourite, email } = req.body;
    const data = JSON.stringify({favourite, email});

   WriteFile(data);
}   