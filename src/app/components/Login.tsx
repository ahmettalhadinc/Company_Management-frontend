'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { loginUser } from '../api/users'


function Login() {
   const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    

  try {
  const response = await loginUser({ email, password })
  console.log(response.data) 
  const token = response.data.data.accessToken
  console.log('Token frontend:', token)

  const res =await fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ token }), 
  credentials: 'include',
});


  if (!res.ok) {
    const errorData = await res.json()
    console.error('API login error:', errorData)
    return
  }

  router.push('/dashboard')
} catch (err) {
  console.error('Login failed:', err)
}
  }
  return (
    <div className='backdrop-blur-md bg-blue-300 p-15 rounded-2xl shadow-xl flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-2xl mb-5'>LOGIN</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 justify-center items-center'>
            <input className='bg-[#F0EDFF] p-4 rounded-2xl' placeholder='Email'  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className='bg-[#F0EDFF] p-4 rounded-2xl' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'  required />
            <button className=' mb-5 w-40 cursor-pointer bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white font-semibold p-3 rounded-2xl' type='submit'>Login</button>

        </form>
      
        <p>You don't have an account?  <Link href='/register'><span className='underline ml-2 font-extrabold'>Sign Up</span> </Link></p>
       
    </div>
  )
}

export default Login