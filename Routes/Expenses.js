const express=require('express');
const{AddCashExpenses,AddItemExpenses,getcashExpenses,getitemUsage,getcashexpensesbycommitte,getitemsexpensesbycommitte,getcashexpensessumbycommitte,getitemsexpensessumbycommitte}=require('../Controller/Expenses')
const router=express.Router();

router.post('/cashexpenses',AddCashExpenses);
router.post('/itemexpenses',AddItemExpenses);
router.get('/getcashexpenses',getcashExpenses);
router.get('/getitemexpenses',getitemUsage);
router.get('/getcashexpenspesbycommitte',getcashexpensesbycommitte);
router.get('/getitemusagebycommitte',getitemsexpensesbycommitte);
router.get('/getcashexpenspessumbycommitte',getcashexpensessumbycommitte);
router.get('/getitemusagesumbycommitte',getitemsexpensessumbycommitte);
module.exports=router;