const express=require('express');
const { CommitteRegister,CommitteLogin } = require('../Controller/CommitteMembers');
const router=express.Router();

router.post('/register',CommitteRegister),
router.post('/login',CommitteLogin)

module.exports=router;