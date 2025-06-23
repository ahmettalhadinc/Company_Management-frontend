import { getDepartments } from '@/app/api/department';
import DepartmentTable from '@/app/components/DepartmentTable';
import React from 'react'

export const metadata = {
title: 'Department Management',
description: 'Next.js 15 Admin Panel with Sidebar and Navbar',
};
const Page = async() => {
  const res= await getDepartments()
  const departments=res.data.data
  return (
    <div>
      <DepartmentTable departments={departments}/>
    </div>
  )
}

export default Page