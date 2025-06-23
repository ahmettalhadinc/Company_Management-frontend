'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import  {Role}  from '../lib/types/role_type';
import { createUser } from '../api/users';

interface Props {
  roles: Role[];
}
 function Register({roles}:Props) {
     
    
const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    roleId: '',
  })

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    setForm({...form,[e.target.name]:e.target.value})
  }

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
        roleId: Number(form.roleId),  
      })

      alert('Kayıt başarılı!')
    } catch (error) {
      alert('Kayıt başarısız: ' + (error as Error).message)
    }
  }
  return (
    
 <div className='backdrop-blur-md bg-blue-300 p-15 rounded-2xl shadow-xl flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-2xl mb-5'>REGISTER</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 justify-center items-center'>
            <input className='bg-[#F0EDFF] p-4 rounded-3xl' value={form.name} onChange={handleChange} placeholder='Full Name' type="text" name='name' required />
            <input className='bg-[#F0EDFF] p-4 rounded-3xl' value={form.email} placeholder='Email' onChange={handleChange} type="email" name='email' required />
            <input className='bg-[#F0EDFF] p-4 rounded-3xl' value={form.password} onChange={handleChange} placeholder='Password' type="password" name='password' required />
            <select name="roleId" onChange={handleChange} className='bg-gray-200 p-3 rounded-2xl'>
                {roles.map((role:Role)=>(
                    <option  key={role.id} value={role.id}  className='rounded-4xl'>{role.name}</option>
                ))}
              
            </select>
            <button className=' mb-5 w-40 cursor-pointer bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white font-semibold p-3 rounded-2xl' type='submit'>Register</button>

        </form>
      
        <p>Do you have an account?  <Link href='/login'><span className='underline ml-2 font-extrabold'>Login</span> </Link></p>
       
    </div>
  )
}

export default Register