const express=require('express');
const router=express.Router();
console.log('Router Up!!!');


const userRouter=require('./users');
router.use('/users',userRouter);

module.exports=router;
