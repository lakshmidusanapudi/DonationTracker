const express=require('express');
const { Register,Login} = require('../Controller/Admin');
const router=express.Router();

router.post('/register',Register)
router.post('/login',Login)

module.exports=router;