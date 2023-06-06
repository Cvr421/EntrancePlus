const mongoose=require("mongoose");
const examShema=new mongoose.Schema({
    catename: {
        type: String,
        // required: true,
        
        // unique:true
      },
      description: {
        type: String,
        // required: true
        
      },
},{timestamps:true});
const Examcate=mongoose.model('Examcate',examShema);
module.exports=Examcate;