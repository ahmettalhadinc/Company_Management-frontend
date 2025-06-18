// app/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const cookieStore = await cookies() // ✅ Artık await gerekiyor
  const token = cookieStore.get('token')?.value

  if (token) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }
}
