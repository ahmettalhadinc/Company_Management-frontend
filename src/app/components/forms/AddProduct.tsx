'use client'
import { createProduct } from '@/app/api/products'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
interface Props {

  setShow: (value: boolean) => void
}

const AddProduct = ({ setShow }: Props) => {

  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: ''
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createProduct({
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock)
      })

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
            <input placeholder="Product's Name" className='border p-3' onChange={handleChange} name='name' value={form.name} />
          </div>



          <div className="flex w-full flex-col">
            <h1>Product's Price</h1>
            <input placeholder="Product's Price" className='border p-3' onChange={handleChange} name='price' value={form.price} />
          </div>
           <div className="flex w-full flex-col">
            <h1>Product's Stock</h1>
            <input placeholder="Product's Stock" className='border p-3' onChange={handleChange} name='stock' value={form.stock} />
          </div>
          <div className='flex flex-col gap-4'>
            <Button style={{ padding: '10px', flex: 1 }} type="submit" variant="contained">
              Add Product
            </Button>
            <Button onClick={() => setShow(false)} style={{ padding: '10px', flex: 1 }} color='error' type="submit" variant="contained">
              Cancel
            </Button>

          </div>


        </form>
      </div>
    </div>
  )
}

export default AddProduct