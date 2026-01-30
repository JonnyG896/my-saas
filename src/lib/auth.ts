// src/lib/auth.ts
import { cookies } from "next/headers";

const TOKEN_COOKIE = "access_token";

export function getAccessToken(): string | null {
  const cookieStore = cookies();
  return cookieStore.get(TOKEN_COOKIE)?.value ?? null;
}

export function isAuthenticated(): boolean {
  return Boolean(getAccessToken());
}