import { getProducts } from '@/app/api/products'
import DataGridd from '@/app/components/DataGrid'
import DataGrid from '@/app/components/DataGrid'
import ProductTable from '@/app/components/ProductTable'
import React from 'react'

export const metadata = {
title: 'Product Management',
description: 'Next.js 15 Admin Panel with Sidebar and Navbar',
};
const page =async () => {
  const res= await getProducts()
  const products=res.data.data
  return (
    <div>
     <ProductTable products={products}/>
    </div>
  )
}

export default page