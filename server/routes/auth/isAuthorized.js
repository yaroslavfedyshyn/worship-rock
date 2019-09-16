const Session = require("../../models/session");
const User = require("../../models/user");
const {HttpUnAuthorizedRequestError} = require('../../utils/errors');

module.exports = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.sessionToken) {
            next(new HttpUnAuthorizedRequestError())
        }

        const session = await Session.findOne({token: req.cookies.sessionToken});

        if (!session) {
            res.status(401);
            return res.send('Unauthorized');
        }

        const user = await User.findById(session.userId);

        if (!user) {
            res.status(401);
            return res.send('Unauthorized');
        }

        req.user = user;

        next()
    } catch (error) {
        next(error)
    }
};