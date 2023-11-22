
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        firstName:"",
         lastName:"", 
         email:"", 
         password:"",
         confirmPassword:""
    })

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, [event.target.name]:event.target.value
        }))
    }

    const [showPassword ,setShowPassword] = useState(false);
    const [showConfirmPassword ,setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard")


    }
  
  
    return (
    <div>
    <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button 
        className={`${accountType === "student"
        ? 
          "bg-richblack-900 text-richblack-5"
        : " bg-transparent text-richblack-200"} py-2 px-4 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("student")}>
            Student
        </button>
        <button
        className={`${accountType === "instructor"
        ? 
        "bg-richblack-900 text-richblack-5"
        : " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}
        >
            Instructor
        </button>
    </div>

    <form onSubmit={submitHandler}>
    {/* First name & Last Name */}
    <div className='flex gap-x-4 mt-[20px]'>

    <label className='w-full'>
                        <p className='text-[1rem] text-richblack-5 mb-1 leading-[1.4rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[1rem] text-richblack-5 mb-1 leading-[1.4rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
                        />
                    </label>
    </div>
    {/* Email Address */}
    <label>
            <p className='text-[1rem] text-richblack-5 mb-1 mt-1 leading-[1.4rem]'>
            Email Address<sup className=' text-pink-200'>*</sup></p>
            <input
            required
                type="text"
                name="email"
                onChange={changeHandler}
                placeholder="Enter email address"
                value={formData.email}
                className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
            />
    </label>
        {/* CreatePassword & confirmPassword */}
        <div className='flex gap-x-4 mt-[20px] '>
        <label className='relative w-full'>
            <p className='text-[1rem] text-richblack-5 mb-1 mt-1 leading-[1.4rem]'>
            Create Password<sup className=' text-pink-200'>*</sup></p>
            <input
            required
                type={showPassword ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
            />

            <span  className=' absolute right-3 top-[40px]'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<FaEyeSlash fontSize={24} fill="#AFB2BF" />) :
                 (<FaEye fontSize={24} fill="#AFB2BF" />)}
            </span>
    </label>

    <label className='relative w-full'>
        <p className='text-[1rem] text-richblack-5 mb-1 mt-1 leading-[1.4rem]'>
        Confirm password <sup className=' text-pink-200'>*</sup> </p>
        <input
            required
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
            type={showConfirmPassword ? ("text") : ("password")}
            className='w-full rounded-md py-2 px-2 bg-richblack-700 mt-1'
        />
        <span className=' absolute right-3 top-[40px]'
        onClick={() => setShowConfirmPassword((prev) => ! prev)}>
            {showConfirmPassword ? (<FaEyeSlash fontSize={24} fill="#AFB2BF"/>) :

             (<FaEye fontSize={24} fill="#AFB2BF"/>)}
        </span>
    </label>

        </div>
        <button 
        className='w-full rounded-md py-2 px-2
         bg-yellow-50 mt-7 text-richblack-900'>
            Ceate Account
        </button>
    </form>
    
    </div>
  )
}


export default SignupForm;