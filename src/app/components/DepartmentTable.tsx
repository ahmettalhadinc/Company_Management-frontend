'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RoleEnum } from '../lib/types/roles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteEmployee } from '../api/employee';
import AddEmployee from './forms/AddEmployee';
import { Department } from '../lib/types/department';
import AddDepartment from './forms/AddDepartment';


interface Props {
  departments: Department[];
}




export default function DepartmentTable({ departments }: Props) {
  const fontStyle = "!font-bold"
  const [show, setShow] = React.useState<boolean>(false)
  return (
    <div className='mt-10 px-4'>
      <div className='flex justify-between'>
        <span></span>
        <button onClick={() => setShow(!show)} className='bg-gray-600 hover:bg-gray-400 transition-colors ease-in-out duration-250 cursor-pointer p-4 rounded-2xl text-white'>Add Department</button>
      </div>
      <div className="w-full overflow-x-auto">


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150, maxWidth: 1 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={fontStyle}>Department Name</TableCell>
              
              
                <TableCell className={fontStyle} align="right">Process Type</TableCell>
               

              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((emp) => (
                <TableRow
                  key={emp.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {emp.name}
                  </TableCell>
                  <TableCell align="right">
                    <div onClick={() => deleteEmployee(emp.id)}>
                      <DeleteForeverIcon className='text-red-600 cursor-pointer' />
                    </div>




                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      {
        show ? <AddDepartment setShow={setShow} /> : null
      }

    </div>
  );
}
