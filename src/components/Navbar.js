import logo from '../assets/Logo.svg';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className="flex justify-between 
        items-center w-11/12 max-w-[1160px]
         py-4 mx-auto">

        <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="Lazy"/>
        </Link>

        <nav>
            <ul className="flex gap-x-6 text-richblack-100">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="#">About</Link>
                </li>
                <li>
                <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex  items-center gap-3 ">
            { !isLoggedIn &&
                <Link to="/Login">
                    <button className=' bg-richblack-800
                     text-richblack-100 rounded-md py-1 px-2 border
                      border-richblack-700'
                    >Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/Signup">
                    <button className=' bg-richblack-800
                     text-richblack-100 rounded-md py-1 px-2 border
                      border-richblack-700'
                    >Signup
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button  className=' bg-richblack-800
                     text-richblack-100 rounded-md py-1 px-2 border
                      border-richblack-700'
                    onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out Successfully");
                    }}
                    >Logout</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="Dashboard">
                    <button className=' bg-richblack-800
                     text-richblack-100 rounded-md py-1 px-2 border
                      border-richblack-700'
                    >Dashboard</button>
                </Link>
            }
        </div>
        </div>
    )
}

// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/Logo.svg'

// const Navbar = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   const setIsloggedIn = props.setIsloggedIn;
//   return (
//     <div className='flex justify-evenly'>
//     <Link>
//       <img src={logo} width={160} height={32} loading="lazy"/>
//     </Link>

//     <nav>
//     <ul className='flex gap-3'>
//       <li>
//       <Link to="/">Home</Link>
//       </li>
//       <li>
//       <Link to="#">About</Link>
//       </li>
//       <li>
//       <Link to="#">Contact</Link>
//       </li>
//     </ul>
//     </nav>

//     <div className='flex gap-3'>
//       {
//         !isLoggedIn &&
//         <Link to="/Login" >
//           <button>Login</button>
//         </Link>
//       }
//       {
//         !isLoggedIn &&
//         <Link to="/Signup" >
//           <button>Signup</button>
//         </Link>
//       }
//       {
//         isLoggedIn &&
//         <Link to="/" >
//           <button>Logout</button>
//         </Link>
//       }
//       {
//         isLoggedIn &&
//         <Link to="/Dashboard" >
//           <button>Dasboard</button>
//         </Link>
//       }
//     </div>
//     </div>
//   )
// }


export default Navbar;