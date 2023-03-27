const router = require('express').Router();

const {createuser} = require('../controller/user')

router.route('/user').post(createuser);

module.exports=router;
