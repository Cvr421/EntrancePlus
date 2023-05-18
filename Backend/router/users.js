const express =require('express');
const {create}=require('../controllers/usercontroller')
const router=express.Router();
router.post('/create',create);
module.exports=router