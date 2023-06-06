const express=require('express')
const {examcate}=require('../controllers/examcate');
const router=express.Router();
router.post('/examcreate',examcate);
module.exports=router

// const express =require('express');
// const {examcate}=require('../controllers/examcate')
// const router=express.Router();
// router.post('/examcreate',examcate);
// module.exports=router