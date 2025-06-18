'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBarStatus } from '../store/managementSlice'
import { RootState } from '../store/store'

const Navbar = () => {
    const dispatch=useDispatch()
const barStatus = useSelector((state: RootState) => state.managementSlice.barStatus)
  
    return (
        <div className='bg-gradient-to-r from-purple-600 to-blue-500  w-full p-5 flex flex-row justify-between items-center'>

            <div onClick={()=>dispatch(toggleBarStatus())} className='flex flex-col gap-1 cursor-pointer'>
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
            </div>

            <p>Welcome </p>


        </div>
    )
}

export default Navbar