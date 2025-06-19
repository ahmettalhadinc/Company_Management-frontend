import { getEmployees } from '@/app/api/employee';
import DataGrid from '@/app/components/DataGrid';
import AddEmployee from '@/app/components/forms/AddEmployee';

import React from 'react';

const Page = async () => {
  const res= await getEmployees()
  const employees= res.data.data

  return (
    <div>
      <h1>Employee Table</h1>
      <DataGrid employees={employees}/>
      <AddEmployee/>
    </div>
  );
};

export default Page;
