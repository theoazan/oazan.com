import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the token from NextAuth
  const token = await getToken({ req: request });

  // Debugging logs
  console.log('Request Pathname:', pathname);
  console.log('Token:', token);

  // Redirect unauthenticated users from /dashboard or its nested routes to the home page
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow access if authenticated or not on protected route
  return NextResponse.next();
}

// Define paths where middleware should apply
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'], // Apply middleware to /dashboard and nested routes, and API routes
};
