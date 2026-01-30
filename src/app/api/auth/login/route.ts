import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("LOGIN BODY:", body);

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("access_token", "dev-token", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
