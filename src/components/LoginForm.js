import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, 
                [event.target.name]:event.target.value
            }
        ))
    }
    
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }


  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

    <label className='w-full'>
        <p className='text-[1rem] text-richblack-5 mb-1 leading-[1.4rem]'>
            Email Address <sup className=' text-pink-200'>*</sup>
        </p>
        <input
         required
         type="email"
         placeholder='Enter Your Email '
         onChange={changeHandler}
         value={formData.email}
         name="email"
         className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
        />
        </label>

        <label className='relative'>
        <p className='text-[1rem] text-richblack-5 mb-1 leading-[1.4rem]'>
            Password <sup className=' text-pink-200'>*</sup>
        </p>
        <input
         required
         type={showPassword ? ("text") : ("password")}
         placeholder='Enter Your Password'
         onChange={changeHandler}
         value={formData.password}
         name="password"
         className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
        />
        <span className=' absolute right-3 top-[38px] cursor-pointer'
        onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<FaEyeSlash fontSize={24} fill="#AFB2BF"/>) : 

            (<FaEye fontSize={24} fill="#AFB2BF"/>)}
        </span>
        <Link to="#">
            <p className='text-blue-100 text-end mt-2 text-sm'>Forgot password</p>
        </Link>

        <button className='w-full rounded-md py-2 px-2
         bg-yellow-50 mt-7 text-richblack-900'>
           Sign In
        </button>
        </label>
    </form>
  )
}


// import React, { useState } from 'react'
// import { FaEye,FaEyeSlash } from "react-icons/fa";




// const LoginForm = () => {

//     const[showPassword, setShowPassword] = useState(false);

//     const[formData, setFormData] = useState({
//         email:"", password:""
//     })    

//     function changeHandler(event) {
//         setFormData((prevData) => ({
//             ...prevData, [event.target.name] : event.target.vlaue
//     }))
//     }
//   return (
//     <div>
//         <form>
//             <label>
//                 <p>
//                 Email Address <sup>*</sup>
//                 </p>
//                 <input
//                     required
//                     placeholder='Enter email address'
//                     onChange={changeHandler}
//                     type="text"
//                     value={formData.value}
//                     name="email"
//                 />
//             </label>

//             <label>
//                 <p>Password <sup>*</sup>
//                 </p>
//                 <input
//                     required
//                     type={showPassword ? ("text") : ("password")}
//                     placeholder='Enter password'
//                     onChange={changeHandler}
//                     value={formData.password}
//                     name="password"
//                 />
//                 <span onClick={() => setShowPassword((prev) => !prev)}>
//                     {showPassword ? (<FaEyeSlash/>) : (<FaEye/>)}
//                 </span>
//                <link to="#">
//                <p>Forgot password</p>
//                </link>

//             </label>
//         </form>
//     </div>
//   )
// }


export default LoginForm;