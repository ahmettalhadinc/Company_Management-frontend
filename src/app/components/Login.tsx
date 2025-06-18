import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-2xl mb-5'>LOGIN</h1>
        <form className='flex flex-col gap-y-5 justify-center items-center'>
            <input className='bg-[#F0EDFF] p-4 rounded-3xl' placeholder='Email' type="email" name='email' required />
            <input className='bg-[#F0EDFF] p-4 rounded-3xl' placeholder='Password' type="password" name='password' required />
            <button className=' mb-5 w-40 cursor-pointer bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white font-semibold p-3 rounded-2xl' type='submit'>Login</button>

        </form>
      
        <p>You don't have an account?  <Link href='/register'><span className='underline ml-2 font-extrabold'>Sign Up</span> </Link></p>
       
    </div>
  )
}

export default Login