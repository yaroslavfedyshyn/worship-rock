const Session = require("../../../models/session");
const User = require("../../../models/user");
const tokenGenerate = require('../../../utils/generateString');

module.exports = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = User.findOne({email: email}, async (err, user) => {

            user.comparePassword(password, async function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    const session = new Session({
                            token: tokenGenerate(),
                            userId: user._id
                        }
                    );

                    const result = await session.save();

                    res.cookie('sessionToken', session.token, { maxAge: 900000, httpOnly: true });
                    res.send(user);
                }
            });

        })
    } catch (error) {
        next(error)
    }
};