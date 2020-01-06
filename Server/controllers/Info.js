const Database = require('../Database/Database');

exports.postInfo = async (req, res, next) => {
    const { email } = req.body;

    try {
        const response = await new Database().selectQuery('USERS');
        const user = response.filter(user => user.email === email);
        res.status(200).json({
            msg: 'success',
            user
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}