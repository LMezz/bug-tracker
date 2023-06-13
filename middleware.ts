import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()   
  if (url.pathname === "/") {
    url.pathname = "/login"
    return NextResponse.redirect(url)   
  }
  if (url.pathname === "/settings") {
    url.pathname = "/settings/profile"
    return NextResponse.redirect(url)
  }
}
