import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//     const token = request.headers.get("authorization")?.replace("Bearer ", "");

//   // OR if stored in cookies:
//   // const token = request.cookies.get("token")?.value;

//   // if token missing, redirect to login
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
}


// Apply middleware only to specific routes
export const config = {
  matcher: ["/dashboard/:path*"]
};