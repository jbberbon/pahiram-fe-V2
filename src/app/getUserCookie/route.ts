// app/api/getUserCookie/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const cookies = request.cookies;
    const cookie = cookies.get("auth");

    if (!cookie) {
      return NextResponse.json({ error: "Cookie not found" }, { status: 404 });
    }

    // Access the cookie value
    const cookieValue = cookie.value;
    const user = JSON.parse(cookieValue);
    
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error parsing cookie:", error);
    return NextResponse.json(
      { error: "Failed to parse cookie" },
      { status: 500 }
    );
  }
}
