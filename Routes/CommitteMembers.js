const express=require('express');
const { Register } = require('../Controller/CommitteMembers');
const router=express.Router();

router.post('/register',Register)

module.exports=router;