import Navbar from '@/app/components/Navbar'
import Sidebar from '@/app/components/Sidebar'
import { StoreProvider } from '@/app/store/StoreProvider'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  

   
    <div>
        <div className='flex flex-row  '>

        <Sidebar />
        <div className='flex flex-col flex-1'>
            <Navbar/>
               {children}
        </div>
        
        </div>
    
    </div> 
  )
}

export default layout