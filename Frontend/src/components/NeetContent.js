import React from 'react'
import "./HomePage.css"
import Nav from "./Nav"
import "./NeetContent.css"
function NeetContent() {
  return (
    <>
    <Nav/>
    <div className="body">
    <h2>Welcome to Neet Section, Let's make it </h2>
    <div className="category-sections" >
        
    <div className="category-section" >
   
    {/* <div className="category-section" key={category._id}> */}
      <h2>Biology</h2>
      {/* <h2>{category.name}</h2> */}
      <p>Biology all Resource</p>
      {/* <p>{category.description}</p> */}
    </div>
    <div className="category-section" >
    {/* <div className="category-section" key={category._id}> */}
      <h2>Physics</h2>
      {/* <h2>{category.name}</h2> */}
      <p>Physics all Resource</p>
      {/* <p>{category.description}</p> */}
    </div>
    <div className="category-section" >
    {/* <div className="category-section" key={category._id}> */}
      <h2>Chemistry</h2>
      {/* <h2>{category.name}</h2> */}
      <p>Chemistry all Resource</p>
      {/* <p>{category.description}</p> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default NeetContent