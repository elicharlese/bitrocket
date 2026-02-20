import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth-token")?.value
  const demoMode = request.cookies.get("demo-mode")?.value

  // Protected routes that require authentication
  const protectedRoutes = ["/app"]

  // Auth routes that should redirect to app if already logged in
  const authRoutes = ["/auth/signin", "/auth/signup", "/auth/forgot-password"]

  // Check if the path starts with any protected route
  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))

  // Check if the path is an auth route
  const isAuthRoute = authRoutes.some((route) => pathname === route)

  // If trying to access a protected route without being logged in or in demo mode
  if (isProtectedRoute && !token && !demoMode) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }

  // If trying to access auth routes while logged in or in demo mode
  if (isAuthRoute && (token || demoMode)) {
    return NextResponse.redirect(new URL("/app", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/app/:path*", "/auth/:path*"],
}
