const mongoose=require('mongoose');
const connect=()=>{
    console.log("Mongodb connected!!!");
    return mongoose.connect('mongodb://127.0.0.1:27017/Entrance');
}
module.exports=connect;