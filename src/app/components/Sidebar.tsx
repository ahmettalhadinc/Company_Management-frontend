import Link from 'next/link';
import React from 'react'
import { AiFillProduct } from 'react-icons/ai';
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdRemoveRedEye } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className='bg-indigo-700 flex flex-col pl-5 pr-10 gap-y-2 h-screen'>
            <div className='flex flex-col items-center justify-center'>

                <FaRegUserCircle fontSize={100} color='white' className='mt-5' />
                <h1 className='text-2xl font-bold text-gray-300'>Welcome</h1>
            </div>
            <Link href="/dashboard">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <FaHome color='white' />
                    <h1 className='text-white'>Dashboard</h1>
                </div>
            </Link>
            <Link href="/dashboard/employees">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <FaUser color='white' />
                    <h1 className='text-white'>Employee Management</h1>
                </div>
            </Link>
            <Link href="/dashboard/roles">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <MdRemoveRedEye color='white' />
                    <h1 className='text-white'>Role Management</h1>
                </div>
            </Link>

            <Link href="/dashboard/products">
                <div className='flex flex-row gap-x-1 items-center  hover:bg-indigo-500 p-2 cursor-pointer rounded-2xl'>
                    <AiFillProduct color='white' />
                    <h1 className='text-white'>Product Management</h1>
                </div>
            </Link>

        </div>
    )
}

export default Sidebar