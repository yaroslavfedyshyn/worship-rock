const { Router } = require('express');
const register = require ('./auth/register/_post');

const router = Router();

router.route('/auth/register')
    .post(register);

module.exports = router;