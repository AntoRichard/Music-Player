const bcrypt = require('bcrypt');
const Database = require('../Database/Database');
const Token = require('uuid-token-generator');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const db = new Database();

exports.loginGet = (req, res, next) => {
    res.status(200).json({
        message: 'success'
    })
}

exports.loginPost =  async (req, res, next) => {

    const email = req.body['E-mail'];
    const {oauth} = req.body;
    let favo = null;
    try {
        fs.readFile('Favo.json',(err, data)=>{
            if(err) throw err;
            favo = JSON.parse(data);
        });
        const jwt_token = await jwt.sign({
            email
        },'HelloWorld');
        const lang = await db.selectQuery('FAVOURITES');
        const userInfo = await db.selectQuery('USERS');
        const user = await userInfo.filter(user => user.email === email);
        if(oauth) {
            
            return res.status(200).json({
                    message: 'Login Successful',
                    token: jwt_token,
                    id: email,
                    language: await lang.filter(lan=> lan.name === email),
                    favourites: favo.favourite,
                    deleted: user[0].deleted
                })
        }
    
        
        const {Password} = req.body;
        if(user) {
            const response = await bcrypt.compare(Password, user[0].password);
            if(response) {
                const lang = await db.selectQuery('FAVOURITES');
                
                return res.status(200).json({
                        message: 'Login Successful',
                        token: jwt_token,
                        id: user[0].email,
                        language: await lang.filter(lan=> lan.name === email),
                        favourites: favo.favourite
                    })
            }else{
                res.status(401).json({
                    message: 'Authentication Failure'
                })
            }
        }else{
            console.log('no user found');   
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: 'Internal server problem'
        })
    }
}