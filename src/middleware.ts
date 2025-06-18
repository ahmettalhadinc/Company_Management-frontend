import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // Authsuz kullanıcı userstack'e girmeye çalışıyorsa login'e yönlendir
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Auth olmuş kullanıcı login veya register sayfasına gidiyorsa dashboard'a yönlendir
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register',
  ],
}
