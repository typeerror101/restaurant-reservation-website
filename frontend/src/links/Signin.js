import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
// import '../styles/signin.css'    

export default function Signin() {
  return (
    <div>
    <div className="main mx-auto shadow-xl mt-32 p-10 w-4/6 bg-zinc-50 text-emerald-700 rounded-lg">
      <h2 className='text-3xl font-medium'>Sign Up Now To Book A Table!</h2>
      <div className='py-4'>
        <h5 className='py-4'>Sign in with one of the providers below</h5>
      </div>
      <div className='flex flex-col gap-4'>
        <button 
        // onClick={GoogleLogin}
        className='text-white bg-emerald-900 p-4 w-full font-medium rounded-lg flex align-middle gap-8'
        >
        <FcGoogle className='text-3xl'/>Sign in with Google
        </button>
        <button  className='text-white bg-emerald-600 p-4 w-full font-medium rounded-lg flex align-middle gap-8'>
        <AiFillFacebook className='text-3xl text-blue-400'/>Sign in with Facebook
        </button>
      </div> 
    </div>
    </div>
  )
}
