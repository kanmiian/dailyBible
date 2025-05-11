import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 检查是否是 sitemap.xml 请求
  if (request.nextUrl.pathname === '/sitemap.xml') {
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'application/xml');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/sitemap.xml',
}; 