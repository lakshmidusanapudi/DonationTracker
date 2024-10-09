const express=require('express');
const { Register } = require('../Controller/Admin');
const router=express.Router();

router.post('/register',Register)

module.exports=router;