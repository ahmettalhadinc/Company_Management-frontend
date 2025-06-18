import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'

const AddEmployee = () => {
  return (
    <div>
        <fieldset style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>


        <legend style={{ padding: "0 8px", fontWeight: "bold" }}>Kullanıcı Bilgileri</legend>

        <form  className="flex flex-col  items-center justify-center space-y-4  p-6   ">
          <div className="flex flex-col space-y-1  ">
            <h1>Ad</h1>
            <TextField name='name'  id="outlined-basic" label="Ad" variant="outlined" />
          </div>
          <div className="flex flex-col space-y-2 mt-4  ">
            <h1>Soyad</h1>
            <TextField name='surname'  id="outlined-basic" label="Soyad" variant="outlined" />
          </div>
          <div className="flex flex-col space-y-2 mt-4  ">
            <h1>Yaş</h1>
            <TextField name='age' id="outlined-basic" label="Yaş" variant="outlined" />
          </div>
          <div className="flex flex-col space-y-2 mt-4 mb-5 ">
            <h1>Yaşadığı Şehir</h1>
            <TextField name='city'  id="outlined-basic" label="Yaşadığı Şehir" variant="outlined" />
          </div>
          <Button type="submit" variant="contained">
         
          </Button>


        </form></fieldset>
    </div>
  )
}

export default AddEmployee