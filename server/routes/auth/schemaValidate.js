module.exports =  (joiSchema) => {
    return function (req, res, next) {
        const data = Object.assign({}, req.body, req.query, req.param);

        const {error} = joiSchema.validate(data);

        error ? next(error) : next();
    }
};