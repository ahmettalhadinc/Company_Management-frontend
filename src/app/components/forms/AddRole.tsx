'use client'
import { createDepartment } from '@/app/api/department'
import { createProduct } from '@/app/api/products'
import { createRole } from '@/app/api/roles'
import { Department } from '@/app/lib/types/department'
import { DepartmentEnum } from '@/app/lib/types/DepartmentEnum'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
interface Props {

  setShow: (value: boolean) => void
  departments:Department[]
}

const AddRole = ({ setShow,departments }: Props) => {

  const [form, setForm] = useState({
    name: '',
    departmentId:'',
    
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createRole({
        name: form.name,
        departmentId:Number(form.departmentId)
       
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
            <h1>Role Name</h1>
            <input placeholder="Role Name" className='border p-3' onChange={handleChange} name='name' value={form.name} />
          </div>
          <div className="flex flex-col space-y-1 w-full  ">
            <h1>Department Name</h1>
          <select  name="departmentId"
    value={form.departmentId}
    onChange={handleChange} className='p-4'>
            {
                departments.map((department)=>(
                    <option className='p-5' key={department.id} value={department.id}>{department.name}</option>
                ))
            }
          </select>
          </div>



        
          <div className='flex flex-col gap-4'>
            <Button style={{ padding: '10px', flex: 1 }} type="submit" variant="contained">
              Add Role
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

export default AddRole