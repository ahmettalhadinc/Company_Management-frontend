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
import { deleteEmployee } from '../lib/api/employee';

type Employee = {
  id: number;
  name: string;
  roleId: number;
  isWorking: boolean;
  createdDate: string;
};

interface Props {
  employees: Employee[];
}




export default function DataGrid({employees}:Props) {
    
  return (
   <div className="w-full overflow-x-auto">

    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee's Name-Surname</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Working Status</TableCell>
            <TableCell align="right">Process Type</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {emp.name}
              </TableCell>
              <TableCell align="right">{RoleEnum[emp.roleId]}</TableCell>
              <TableCell align="right">{emp.isWorking ? 'Still Working' :'Not Working'}</TableCell>
              <TableCell align="right">
                <div onClick={()=>deleteEmployee(emp.id)}>
                    <DeleteForeverIcon  className='text-red-600 cursor-pointer' />
                </div>



              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
