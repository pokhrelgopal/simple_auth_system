import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // Redirect non-authenticated users from protected routes /profile
  if (!token && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect authenticated from /login or /signup to home
  if (token && ["/login", "/signup"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow others
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/login", "/signup"],
};
