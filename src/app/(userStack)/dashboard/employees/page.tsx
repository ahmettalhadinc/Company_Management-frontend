import { getEmployees } from '@/app/lib/api/employee';
import React from 'react';

const Page = async () => {
  let products = [];

  try {
    const res = await getEmployees();  // axios response
    products = res.data.data;          // asıl liste burada
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      {products.map((p: any) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default Page;
