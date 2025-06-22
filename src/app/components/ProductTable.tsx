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
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import AddProduct from './forms/AddProduct';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import IncreaseProduct from './forms/IncreaseProduct';
import DecreaseProduct from './forms/DecreaseProduct';


interface Props {
    products: Product[];
}




export default function DataGrid({ products }: Props) {
    const fontStyle="!font-bold"
    const [show, setShow] = React.useState<boolean>(false)
    const [selectedProduct, setselectedProduct] = React.useState<Product | null>(null)
    const [Increase, setIncrease] = React.useState<Boolean>(false)
    const [Decrease, setDecrease] = React.useState<Boolean>(false)
 
    return (
        <div className='mt-10 px-4'>
            <div className='flex justify-between'>
                <span></span>
                <button onClick={() => setShow(!show)} className='bg-orange-300 cursor-pointer p-4 rounded-2xl  text-white'>Add Product</button>
            </div>
            <div className="w-full overflow-x-auto">


                <TableContainer className='mt-10 ' component={Paper}>
                    <Table sx={{ minWidth: 150, maxWidth: 1 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell  className={fontStyle} align='left'>Product's Name</TableCell>
                                <TableCell className={fontStyle} align="center">Price</TableCell>
                                <TableCell className={fontStyle} align="center">Stock</TableCell>
                                <TableCell className={fontStyle} align="center">Created Date</TableCell>
                                <TableCell className={fontStyle} align="center">Availability</TableCell>
                                <TableCell className={fontStyle} align="center">Process Type</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="center">{product.price}</TableCell>
                                    <TableCell align="center">{product.stock}</TableCell>
                                    <TableCell align="center"> {new Date(product.createdDate).toLocaleString('tr-TR', {
                                        dateStyle: 'short',
                                        timeStyle: 'short',
                                    })}</TableCell>
                                    <TableCell align="center">
                                        <div className="flex justify-center items-center">
                                            {product.stock > 0 ? <TiTick color='green' fontSize={25} /> :<ImCross color="red" /> }
                                        </div>
                                    </TableCell>
                                    <TableCell  align="center">
                                        <div className='flex justify-center items-center gap-4'>
                                              <FaArrowUp onClick={()=>{
                                                setIncrease(true)
                                                setselectedProduct(product)
                                                }} className='cursor-pointer' color='green' fontSize={20}/>
                                        <DeleteForeverIcon className='text-red-600 cursor-pointer' />
                                            <FaArrowDown onClick={()=>{
                                                setDecrease(true)
                                                setselectedProduct(product)
                                                }} className='cursor-pointer' color='blue' fontSize={20}/>
                                        </div>
                                          
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            {
                show ? <AddProduct setShow={setShow} /> : null
            }
            {
                Increase ? <IncreaseProduct increase={setIncrease} selectedProduct={selectedProduct} /> : null
            }
            {
                Decrease ? <DecreaseProduct decrease={setDecrease} selectedProduct={selectedProduct} /> : null
            }

        </div>
    );
}
