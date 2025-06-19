'use client'
import Link from 'next/link';
import React from 'react'
import { AiFillProduct } from 'react-icons/ai';
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdRemoveRedEye } from 'react-icons/md';
import { FcDepartment } from "react-icons/fc";
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';



const Sidebar = () => {
   
    const barStatus = useSelector((state: RootState) => state.managementSlice.barStatus)
    return (
        <div className={`bg-indigo-700 flex flex-col gap-y-2 min-h-screen overflow-hidden transition-[width] duration-500 ease-in-out ${barStatus ? 'w-20 items-center hover:w-30' : 'w-64 pl-5 pr-10'}`}>

            
            <div className='flex flex-col items-center justify-center'>

                <FaRegUserCircle fontSize={100}  color='white' className={`${barStatus ? 'hidden' : ''} text-white mt-5`} />
                <h1 className={`${barStatus ? 'hidden' : ''} text-2xl font-bold text-gray-300`}>Welcome</h1>
            </div>
            <Link href="/dashboard">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <FaHome color='white' />
                 <h1 className={`${barStatus ? 'hidden' : ''} text-white`}>Dashboard</h1>
                </div>
            </Link>
            <Link href="/dashboard/employees">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <FaUser color='white' />
                    <h1 className={`${barStatus ? 'hidden' : ''} text-white`}>Employee Management</h1>
                </div>
            </Link>
            <Link href="/dashboard/roles">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <MdRemoveRedEye color='white' />
                    <h1 className={`${barStatus ? 'hidden' : ''} text-white`}>Role Management</h1>
                </div>
            </Link>

            <Link href="/dashboard/products">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <AiFillProduct color='white' />
                    <h1 className={`${barStatus ? 'hidden' : ''} text-white`}>Product Management</h1>
                </div>
            </Link>
            <Link href="/dashboard/departments">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <FcDepartment color='white' />
                    <h1 className={`${barStatus ? 'hidden' : ''} text-white`}>Department Management</h1>
                </div>
            </Link>

        </div>
    )
}

export default Sidebar