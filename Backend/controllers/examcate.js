const Examcate=require("../datamodel/Examcategories")

const examcate= async function(req, res) {
    // console.log(req.body);
    // try{
    //     const examsection=await Examcate.findOne({catename: req.body.catename , description:req.body.description}).exec();
    //     if(!examsection){
    //         const newExamsection=await Examcate.create(req.body.catename,req.body.description);
    //         console.log(newExamsection);
    //         return res.send({message:"Exam Categorie created !!!"})

    //     }else{
    //         return res.send({message:"This Categorie Already exits"})
    //     }
    // }catch(err){
    //     console.error(err);
    //     return res.send({message:"Error Occured while Creating Exam section"})
    // }

    try {
        // Extract the category name and description from the request body
        const { catename, description } = req.body;
    
        // Create a new category document
        const category = new Examcate({
          catename,
          description,
        });
    
        // Save the category to the database
        await category.save();
    
        // Return a success response
        res.status(201).json({ message: 'Category created successfully' });
      } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'An error occurred' });
      }


    // -----------------------------------------------------------------
 
        // try {
        //   const { catename, description } = req.body;
        //   const examsection=await Examcate.findOne({catename: req.body.catename , description:req.body.description}).exec();
        //   if(!examsection){
        //   const category = new Examcate({ catename, description });
        //   await category.save();
        //   res.status(201).json(category);
        //   }
        //   else{
        //     console.error("Error while creating the section")
        //   }
        // } catch (error) {
        //   console.error('Error creating category:', error);
        //   res.status(500).json({ error: 'Failed to create category' });
        // }
   

  };
  

module.exports={
   examcate
}
