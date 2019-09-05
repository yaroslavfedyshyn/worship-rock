const User = require("../../../models/user");

module.exports = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    try {
        const user = new User({
                firstName,
                lastName,
                email,
                password
            }
        );
        const result = await user.save();
        res.send(result);
    } catch (error) {
        next(error)
    }
};