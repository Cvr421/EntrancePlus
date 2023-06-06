import React, {  useState } from 'react';
import axios from 'axios';
import "./HomePage.css"
import Nav from "./Nav"
const instance = axios.create();
const HomePage = () => {
  // const [categories, setCategories] = useState([]);
  const [examcate, setExamcate] = useState({
    Catename:"",
    description:""
  });
  const handleonChange= async (e)=>{
    const {name,value}=e.target;
    setExamcate({ ...examcate, [name]: value});
  }

  // const [description, setDescription] = useState('');
  // useEffect(() => {
  //   // Fetch the categories from the backend API
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get('/api/categories'); // Replace with your API endpoint
  //       setCategories(response.data);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);
  
  const PostExam = async (e) => {
    e.preventDefault();
    // console.log(user);
    const { Catename, description } = examcate// same as below code 
    if (Catename && description) {
      await instance.post("http://localhost:3001/examcates/examcreate", {examcate})
        // data= data.json();
        // console.log(data);
        .then(res => {
          alert("New section created")
          // navigate("/signin")
        });// this exacute only when axios post is excuted Becoz axios is promised based
    } else {
      alert("Categories Exist !!!")
    }
  }

  // const PostExam = async (e) => {
  //   e.preventDefault();
  //   const {name,description}=examcate;
  //   // try {
  //     // const response = 
  //     if(name && description){
  //       await axios.post("http://localhost:3001/examcates/examcreate",  examcate);

  //       // .then(res=>{
  //       //   alert("New Categorie Created")
  //       // });

  //     }else{
  //       alert("Invalid input")
  //     }
  //     // await axios.post('http://localhost:3001/examcates/examcreate',  examcate);
  //     // setCategories([...categories, response.data]);
  //     // setName('');
  //     // setDescription('');
  //     // .then(res=>{
  //     //   alert("Exam section created")
  //     // });
  //   // } catch (error) {
  //   //   console.error('Error creating category:', error);
  //   // }
  // };

  return (
    <div>
        <Nav/>
        <div className="welcome">
        
       <img className="image" alt='pic' src="https://www.turito.com/in/blog/wp-content/uploads/2021/06/How-to-Self-study-Effectively-2.jpg"></img>
       <h4>Welcome to Entrance+</h4>
        </div>
        <div className='cat'>
        <form 
        // onSubmit={handleSubmit}
        >
        <input
        className="input"
          type="text"
          placeholder="Category Name"
          name="Catename"
          value={examcate.Catename}
          // onChange={(e) => setName(e.target.value)}
          onChange={handleonChange}
        />
        <input
        className="input"
          type="text"
          placeholder="Category Description"
          name="description"
          value={examcate.description}
          onChange={handleonChange}
        />
        <button type="submit" onClick={PostExam}>Add Category</button>
      </form>
        </div>
    
      <div className="category-sections">
        {/* {categories.map((category) => ( */}
          <div className="category-section" >
          {/* <div className="category-section" key={category._id}> */}
            <h2>NEET</h2>
            {/* <h2>{category.name}</h2> */}
            <p>Neet all Patten Resource</p>
            {/* <p>{category.description}</p> */}
          </div>
{/* ---------------------------------------------------------------- */}
          <div className="category-section" >
          {/* <div className="category-section" key={category._id}> */}
            <h2>NEET</h2>
            {/* <h2>{category.name}</h2> */}
            <p>Neet all Patten Resource</p>
            {/* <p>{category.description}</p> */}
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="category-section" >
          {/* <div className="category-section" key={category._id}> */}
            <h2>NEET</h2>
            {/* <h2>{category.name}</h2> */}
            <p>Neet all Patten Resource</p>
            {/* <p>{category.description}</p> */}
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="category-section" >
          {/* <div className="category-section" key={category._id}> */}
            <h2>NEET</h2>
            {/* <h2>{category.name}</h2> */}
            <p>Neet all Patten Resource</p>
            {/* <p>{category.description}</p> */}
          </div>
          {/* ---------------------------------------------------------------- */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default HomePage;
