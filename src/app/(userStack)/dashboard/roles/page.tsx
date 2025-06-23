import { getDepartments } from '@/app/api/department';
import { getRoles } from '@/app/api/roles';
import AddRole from '@/app/components/forms/AddRole';
import RoleTable from '@/app/components/RoleTable';
import React from 'react'

export const metadata = {
title: 'Role Management',
description: 'Next.js 15 Admin Panel with Sidebar and Navbar',
};
const page = async() => {
    const res= await getRoles()
    const roles=res.data.data
    const res2= await getDepartments()
    const departments=res2.data.data
  return (
    <div>
      <RoleTable departments={departments} roles={roles} />
    </div>
  )
}

export default page