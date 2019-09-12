const { Router } = require('express');
const register = require ('./register/_post');
const login = require ('./login/_post');
const getMe = require ('./getMe/_get');
const isAuthorized = require('../auth/isAuthorized');

const router = Router();

router.route('/register')
    .post(register);

router.route('/login')
    .post(login);

router.use(isAuthorized);
router.route('/profile')
    .get(getMe);

module.exports = router;