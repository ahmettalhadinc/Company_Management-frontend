import Register from '@/app/components/Register'
import { getRoles } from '@/app/api/roles'
import React from 'react'

const page = async () => {
  const res= await getRoles()
        const roles= res.data.data
  return (
      <div className='flex h-screen flex-col justify-center items-center'>
     <Register roles={roles}/>
    </div>
  )
}

export default page