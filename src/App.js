import "./App.css";
import Navbar from './components/Navbar'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
// import { Route,Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import { useState } from "react";

// function App() {

//   const [isLoggedIn, setIsloggedIn] = useState(false);
//   return (
//     <div>
//     <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>
//     <Routes>
//       <Route path="/" element= {<Home/>}/>
//       <Route path="/login" element= {<Login/>}/>
//       <Route path="/Signup" element={<Signup/>}/>
//       <Route path="/Dashboard" element={<Dashboard/>}/>
//     </Routes>
//     </div>
//   )
// }


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  )
}

export default App;
