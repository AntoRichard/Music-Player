const Database = require('../Database/Database');
const db = new Database();

exports.getDelete = async (req, res, next) => {
    const email = req.params.email;
    console.log(email)
    try {
        const response = await db.updateTable('USERS','deleted','false',`EMAIL='${email}'`)
        res.status(200).json({
            msg: 'Success'
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem',
            isDeleted: false
        })
    }
}

exports.postDelete = async (req, res, next) => {
    const {email} = req.body;
    console.log(email);
    const date = new Date();
    const cur_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        console.log(cur_date)
    try {
        
        const response = await db.updateTable('USERS','deleted','true',`EMAIL='${email}'`)
        const newres = await db.updateTable('USERS','deactivated',`'${cur_date}'`,`EMAIL='${email}'`);
        const users = await db.selectQuery('USERS');
        const user = users.filter(user => user.email === email);
        res.status(200).json({
            msg: 'Success',
            isDeleted: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem',
            isDeleted: false
        })
    }
}