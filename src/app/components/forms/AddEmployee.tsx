'use client'
import { createEmployee } from '@/app/api/employee'
import { getRoles } from '@/app/api/roles'
import { Role } from '@/app/lib/types/role_type'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
interface Props {

  setShow: (value: boolean) => void
}

const AddEmployee = ({ setShow }: Props) => {
  const [roles, setRoles] = useState<Role[]>([])
  const [form, setForm] = useState({
    name: '',
    roleId: '',
    isWorking: ''
  })

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getRoles()
        setRoles(res.data.data)
      } catch (err) {
        console.error('Roller alınamadı:', err)
      }
    }

    fetchRoles()
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createEmployee({
        name: form.name,

       isWorking: form.isWorking === 'true',
        roleId: Number(form.roleId),
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
            <h1>Full Name</h1>
            <input placeholder='Full Name' className='border p-3' onChange={handleChange} name='name' value={form.name} />
          </div>


          <div className="flex flex-col w-full ">
            <h1>Role</h1>
            <select name='roleId' onChange={handleChange} className='w-full border p-2 rounded'>
              {roles.map((role: Role) => (
                <option value={role.id} key={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col">
             <h1>Is he/she still working?</h1>
            <select name='isWorking' onChange={handleChange} required className="w-full border p-2 rounded">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className='flex flex-col gap-4'>
            <Button style={{ padding: '10px', flex: 1 }} type="submit" variant="contained">
              Add Employee
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

export default AddEmployee