import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import HomePage from './components/HomePage';
import Nav from "./components/Nav"
import NeetContent from './components/NeetContent';
import Biology from './components/Biology';
function App() {
  return (

    <div className="App">
      {/* {signUP} */}
    
      {/* Login */}
      <Router>
      
      <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Homepage" element={<HomePage/>}/>
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/neetcontent" element={<NeetContent/>}/>
          <Route path="/Biology" element={<Biology/>}/>
          
          {/* Add more routes for other pages, if needed */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;


