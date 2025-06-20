import { getEmployees } from '@/app/api/employee';
import DataGrid from '@/app/components/DataGrid';
import AddEmployee from '@/app/components/forms/AddEmployee';

import React from 'react';

export const metadata = {
title: 'Employee Management',
description: 'Next.js 15 Admin Panel with Sidebar and Navbar',
};
const Page = async () => {
  const res= await getEmployees()
  const employees= res.data.data
  

  return (
    <div>
     
      <DataGrid employees={employees}/>
      
    </div>
  );
};

export default Page;
