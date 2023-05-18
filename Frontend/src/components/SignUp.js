
import React from 'react'
import "./SignUp.css"
import axios from "axios";

import { useState } from 'react';
export default function SignUp() {
  const [user, setUser] = useState({
    // here we make state or variable for every input field for form data
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const { name, value } = e.target; //any changes that made into the input field will come here first

    setUser({ ...user, [name]: value });// here we are updating OR CHANGING the user variable
    
  
    // const data = await response.json();
    // console.log(data);
  }
  const PostData = async (e) => {
    e.preventDefault();
    // console.log(user);
    const { name, email, password, confirm_password } = user// same as below code 


    


    //  const res=await res.json();

    if (name && email && password && (password === confirm_password)) {
      await axios.post("http://localhost:3001/users/create", user)
        // data= data.json();
        // console.log(data);
        .then(res => {
          alert("Signup successfully")
          // navigate("/signin")
        });// this exacute only when axios post is excuted Becoz axios is promised based
    } else {
      alert("Invalid Input")
    }
  }
  return (
    <div>
      <div class="signup-container">
        <div className="Entrance">
                <h1>Entrance+</h1>
                <p>Open Resource for the All Entrance Exam...</p>
                <span>Let's Make it Available to EveryOne!!!</span>
        </div>  
        <div className="signup-form">
        <p>Already have an account? <a href="#">Log In</a></p>
          <h2>Sign Up</h2>
          <form>
            <div className="input-field">
              <input type="text" placeholder="Name" name="name" required 
              value={user.name   }
              onChange={handleSubmit  }

            
              
              />
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email" name="email" required
              value={user.email   }
              onChange={handleSubmit  }
              
              />
            </div>
            <div className="input-field">
              <input type="password" placeholder="password" name="password"  required 
              value={user.password   }
              onChange={handleSubmit  }
              
              
              
              />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Confirm Password" name="confirm_password"required 
              
              value={user.confirm_password   }
              onChange={handleSubmit  }
              
              />
            </div>
            <div className="button-container">
              <button type="submit" onClick={PostData}>Sign Up</button>
            </div>
          </form>
         
        </div>
      </div>


    </div>
  )
}
