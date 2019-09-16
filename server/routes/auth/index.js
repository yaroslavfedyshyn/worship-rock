const { Router } = require('express');

const User = require('../../models/user');
const register = require ('./register/_post');
const login = require ('./login/_post');
const getMe = require ('./getMe/_get');
const forgotPassword = require ('./forgotPassword/_post');
const resetPassword = require ('./resetPassword/_get');
const isAuthorized = require('../auth/isAuthorized');
const validate = require('./schemaValidate');
const joiSchemas = require('./joiSchemas');

const router = Router();

router.route('/register')
    .post(validate(joiSchemas.registerSchema), register);

router.route('/login')
    .post(login);

router.route('/password/forgot')
    .post(forgotPassword);

router.route('/password/reset')
    .post(resetPassword);

router.use(isAuthorized);
router.route('/profile')
    .get(getMe);

module.exports = router;