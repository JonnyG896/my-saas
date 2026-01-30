import { NextResponse } from "next/server";
import type { User } from "@/types/user";

let USERS: User[] = [];

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const user = USERS.find((u) => u.id === params.id);
  if (!user) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  USERS = USERS.map((u) =>
    u.id === params.id ? { ...u, ...body } : u
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  USERS = USERS.filter((u) => u.id !== params.id);
  return NextResponse.json({ success: true });
}
