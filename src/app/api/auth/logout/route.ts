import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Token cookie’sini temizle
  response.cookies.set('token', '', {
    maxAge: 0,
    path: '/',
  });

  return response;
}
