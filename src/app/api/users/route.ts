import { NextResponse } from "next/server";
import type { User } from "@/types/user";

let USERS: User[] = [
  { id: "1", email: "admin@test.com", name: "Admin User", role: "admin" },
  { id: "2", email: "user@test.com", name: "Normal User", role: "user" },
];

export async function GET() {
  return NextResponse.json(USERS);
}

export async function POST(req: Request) {
  const body = await req.json();

  const user: User = {
    id: crypto.randomUUID(),
    email: body.email,
    name: body.name,
    role: body.role ?? "user",
  };

  USERS.push(user);

  return NextResponse.json(user, { status: 201 });
}
