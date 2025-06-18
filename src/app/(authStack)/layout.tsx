import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    
  return (
    
    <div>{children}</div>
  )
}

export default layout