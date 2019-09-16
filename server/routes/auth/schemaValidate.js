module.exports = function (joiSchema) {
    return function (req, res, next) {
        const {error} = joiSchema.validate(req.body);

        return error ? next(error) : next();
    }
};