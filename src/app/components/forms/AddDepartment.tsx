'use client'
import { createDepartment } from '@/app/api/department'
import { createProduct } from '@/app/api/products'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
interface Props {

  setShow: (value: boolean) => void
}

const AddDepartment = ({ setShow }: Props) => {

  const [form, setForm] = useState({
    name: '',
    
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createDepartment({
        name: form.name,
       
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
            <h1>Department Name</h1>
            <input placeholder="Department Name" className='border p-3' onChange={handleChange} name='name' value={form.name} />
          </div>



        
          <div className='flex flex-col gap-4'>
            <Button style={{ padding: '10px', flex: 1 }} type="submit" variant="contained">
              Add Department
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

export default AddDepartment