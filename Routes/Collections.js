const express=require('express');
const {AddCashCollection,AddItemCollection,getcashcollection,getitemcollection,getcashbycommitte,getitemsbycommitte } = require('../Controller/Collection');
const router=express.Router();

router.post('/cash',AddCashCollection),
router.post('/item',AddItemCollection)
router.get('/allcash',getcashcollection)
router.get('/allitem',getitemcollection)
router.get('/cashbycommitte',getcashbycommitte)
router.get('/itembycommitte',getitemsbycommitte)

module.exports=router;