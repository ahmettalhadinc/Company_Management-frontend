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




export default function DataGrid({ employees }: Props) {
  const fontStyle = "!font-bold"
  const [show, setShow] = React.useState<boolean>(false)
  return (
    <div className='mt-10 px-4'>
      <div className='flex justify-between'>
        <span></span>
        <button onClick={() => setShow(!show)} className='bg-green-600 cursor-pointer p-4 rounded-2xl text-white'>Add Employee</button>
      </div>
      <div className="w-full overflow-x-auto">


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150, maxWidth: 1 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={fontStyle}>Employee's Name-Surname</TableCell>
                <TableCell className={fontStyle} align="right">Role</TableCell>
                <TableCell className={fontStyle} align="right">Working Status</TableCell>
                <TableCell className={fontStyle} align="right">Process Type</TableCell>
                <TableCell className={fontStyle} align="right">Joined Date</TableCell>

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
                  <TableCell align="right">{emp.isWorking ? 'Still Working' : 'Not Working'}</TableCell>
                  <TableCell align="right">
                    <div onClick={() => deleteEmployee(emp.id)}>
                      <DeleteForeverIcon className='text-red-600 cursor-pointer' />
                    </div>




                  </TableCell>
                  <TableCell align="right"> {new Date(emp.createdDate).toLocaleString('tr-TR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      {
        show ? <AddEmployee setShow={setShow} /> : null
      }

    </div>
  );
}
