'use client'
import { createProduct, decreaseStock, increaseStock } from '@/app/api/products'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
interface Props {

  decrease: (value: boolean) => void,
selectedProduct: Product | null;
}

const DecreaseProduct = ({ selectedProduct,decrease }: Props) => {
  const [form, setForm] = React.useState({
  name: '',
  price: 0,
  createdDate: '',
  id: 0,
  stock: 0
});

React.useEffect(() => {
  if (selectedProduct) {
    setForm({
      name: selectedProduct.name || '',
      price: selectedProduct.price || 0,
      createdDate: selectedProduct.createdDate || '',
      id: selectedProduct.id || 0,
      stock: 0  // burayı 0 yapıyoruz, çünkü artıracağımız stok bu olacak
    });
  }
}, [selectedProduct]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.name === 'stock' ? Number(e.target.value) : e.target.value;
  setForm({ ...form, [e.target.name]: value });
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await decreaseStock(form)

      alert('Kayıt başarılı!')
    } catch (error) {
      alert('Kayıt başarısız: ' + (error as Error).message)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-md z-50 ">

      <div className='bg-white'>
        <form onSubmit={handleSubmit} className="  flex flex-col  items-center justify-center space-y-4  p-6 rounded-2xl   ">
          <div className="flex flex-col space-y-1 w-full  ">
            <h1>Product's Name</h1>
            <input disabled placeholder="Product's Name" className='border p-3' onChange={handleChange} name='name' value={form.name} />
          </div>



          <div className="flex w-full flex-col">
            <h1>Product's Price</h1>
            <input disabled placeholder="Product's Price" className='border p-3' onChange={handleChange} name='price' value={form.price} />
          </div>
          
           <div className="flex w-full flex-col">
            <h1>Number of Decrease Stock</h1>
          <input
  type="number"
  placeholder="Product's Stock"
  className='border p-3'
  onChange={handleChange}
  name='stock'
  value={form.stock}
/>

          </div>
          <div className='flex flex-col gap-4'>
            <Button style={{ padding: '10px', flex: 1 }} type="submit" variant="contained">
              Decrease Stock
            </Button>
            <Button onClick={() => decrease(false)} style={{ padding: '10px', flex: 1 }} color='error'  variant="contained">
              Cancel
            </Button>

          </div>


        </form>
      </div>
    </div>
  )
}

export default DecreaseProduct