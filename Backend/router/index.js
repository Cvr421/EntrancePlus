const express=require('express');
const router=express.Router();
console.log('Router Up!!!');


const userRouter=require('./users');
const examcateRouter=require('./examcate')
router.use('/users',userRouter);
router.use('/examcates',examcateRouter);

module.exports=router;
