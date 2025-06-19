'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBarStatus } from '../store/managementSlice'
import { RootState } from '../store/store'
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'

const Navbar = () => {
      const router = useRouter();
         const handleLogout = async () => {
        await fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
        router.push('/login');  // veya istediğin sayfa
      };
    const dispatch=useDispatch()
const barStatus = useSelector((state: RootState) => state.managementSlice.barStatus)
  
    return (
        <div className='bg-gradient-to-r from-purple-600 to-blue-500  w-full p-5 flex flex-row justify-between items-center'>

            <div onClick={()=>dispatch(toggleBarStatus())} className='flex flex-col gap-1 cursor-pointer'>
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
            </div>

          <IoLogOutOutline className='cursor-pointer text-white font-extrabold'  onClick={handleLogout} fontSize={40}/>


        </div>
    )
}

export default Navbar