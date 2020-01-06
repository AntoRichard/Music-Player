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
    console.log(email)
    try {
        // const response = await db.updateTable('USERS', 'DELETED','true',`EMAIL='${email}'`);
        const response = await db.updateTable('USERS','deleted','true',`EMAIL='${email}'`)
        // const response = await db.selectQuery('USERS');
        res.status(200).json({
            msg: 'Success',
            isDeleted: true
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem',
            isDeleted: false
        })
    }
}