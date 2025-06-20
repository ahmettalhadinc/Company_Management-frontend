import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const cookieValue = request.cookies.get('token')?.value;

  if (!cookieValue) {
    return NextResponse.json({ error: 'Token bulunamadı' }, { status: 401 });
  }

  return NextResponse.json({ token: cookieValue }); // ✅ JSON formatında dönüş
}
