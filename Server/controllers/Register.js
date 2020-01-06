const Database = require('../Database/Database');
const bcrypt = require('bcrypt');
const db = new Database();

exports.getRegister = (req, res, next) => {
    res.status(200).json({
        msg:'success'
    })
}

const convertor = arr => {
    let value = '';

    arr.forEach((val, index)=> {
        if(index === 0){
            value+=`'{"${val}",`
        }else if(index === arr.length-1){
            value+=`"${val}"}'`
        }else {
            value+=`"${val}",`
        }
    })
    return value;
}

exports.postRegister = async (req, res, next) => {
    try {
        // await new Database().createTable('USERS','ID SERIAL PRIMARY KEY, EMAIL VARCHAR (355) UNIQUE NOT NULL, PHONE VARCHAR (50) NOT NULL,PASSWORD VARCHAR (355) UNIQUE NOT NULL');
        // await new Database().createTable('FAVOURITES','ID SERIAL PRIMARY KEY,LANGUAGES TEXT[],NAME VARCHAR (100)');
        // const {phone, Password} = req.body;
        // const email = req.body['E-mail'];
        
        
        const {Phone, Password, languages, favourites} = req.body;
        const email = req.body['E-mail'];
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(Password, salt);
        console.log(Phone, Password, email, convertor(languages))
        await db.insertIntoTabel('USERS', '(EMAIL, PHONE, PASSWORD)',`'${email}','${Phone}','${hashPassword}'`);
        await db.insertIntoTabel('FAVOURITES','(LANGUAGES,NAME)',`${convertor(languages)},'${email}'`);
        res.status(200).json({
            message: 'success'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}