const User=require("../datamodel/user")
// const create=async function(req,res){
//     // console.log(req.body);
//     if(req.body.password != req.body.confirm_password){
//         // return res.redirect('back')
//         return res.send({message:"Confirm password did't match"});
//     }
//  await User.findOne({email:req.body.email},function(err,user){
//         if(err){
//             console.error(err);
//             return;
//         }
//         if(!user){
//             User.create(req.body,function (err,user) {
//                 if(err){
//                     console.error(err);
//                     return;
//                 }else{
//                         return  res.send({message:"Successfully SignUp"})
//                 }
//                 // return console.log('Account created');
               
//                 // return res.redirect('/Login');
//             })
//         }
//         else{
//             return res.redirect('/Login');
//         }
//     })
// }

const create = async function(req, res) {
    // console.log(req.body);
    if (req.body.password != req.body.confirm_password) {
      return res.send({ message: "Confirm password did not match" });
    }
  
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
        const newUser = await User.create(req.body);
        console.log(newUser);
        return res.send({ message: "Successfully signed up" });
      } else {
        // return res.redirect('/Login');
        return res.send({ message: "Your Email is SignUP with this account..." });
      }
    } catch (err) {
      console.error(err);
      return res.send({ message: "Error occurred while signing up" });
    }
  }
  
  





module.exports={
    create
}