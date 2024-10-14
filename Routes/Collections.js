const express=require('express');
const {AddCashCollection,AddItemCollection,getcashcollection,getitemcollection,getcashbycommitte,getitemsbycommitte,getcashcountbycommitte,getitemscountbycommitte } = require('../Controller/Collection');
const router=express.Router();

router.post('/cash',AddCashCollection),
router.post('/item',AddItemCollection)
router.get('/allcash',getcashcollection)
router.get('/allitem',getitemcollection)
router.get('/cashbycommitte',getcashbycommitte)
router.get('/itembycommitte',getitemsbycommitte)
router.get('/cashsum',getcashcountbycommitte)
router.get('/itemsum',getitemscountbycommitte)

module.exports=router;