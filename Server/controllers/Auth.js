const jwt = require('jsonwebtoken');


exports.AuthPost = async (req, res, next) => {
    const { token, email } = req.body;
    try {
        const response = await jwt.verify(token, 'HelloWorld');
        console.log(response);
        res.status(200).json({
            msg: 'success',
            isAuth: true
        });
    } catch (err) {
        res.status(402).json({
            msg: 'Authentication failure',
            isAuth: false
        })
    }
}