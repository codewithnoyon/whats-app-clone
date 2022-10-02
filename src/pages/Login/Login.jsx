import React from 'react';
import {AiFillMessage} from 'react-icons/ai'

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen px-2 md:px-0'> 
            <div className='max-w-[23rem] '>
                <div className="flex items-center justify-center mb-3 ">
                <AiFillMessage className='bg-red-500 text-xl w-20 h-20 p-4 text-white rounded-2xl'/>
                </div>
                <h3 className='text-3xl font-semibold text-center mb-3'>Login</h3>
                <form action=""  method="post" className='border border-gray-500 border-opacity-5 p-6 shadow-lg md:shadow-xl rounded-lg space-y-3'>
                    <input placeholder='Phone Number or Email' className='focus:outline-red-400 outline-1 text-sm rounded-md w-full p-4 bg-slate-100' type="email" name="email" id="em placeholder='Phone Number or Email'ail" />
                    <input placeholder='Password' className='focus:outline-red-400 outline-1 text-sm rounded-md w-full p-4 bg-slate-100' type="password" name="password" id="password" />
                    <span className='text-xs text-gray-500'>Forget Password?</span>
                    <input className='rounded-md bg-red-500 hover:bg-red-500 px-5 py-3 text-white w-full' type="submit" value="Login" />
                    <a className='text-red-500 text-sm text-center block' href="#">Create an account</a>
                </form>
            </div>
        </div>
    );
};

export default Login;