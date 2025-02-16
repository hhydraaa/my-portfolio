import { NextResponse, type NextRequest } from 'next/server';

export const config = { matcher: '/api/send' }

export function middleware(request: NextRequest) {
  // Rate limiting implemente edene kadar geçici olarak devre dışı
  return NextResponse.next();
} 