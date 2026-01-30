// src/lib/api.ts

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api";

type FetchOptions = RequestInit & {
  token?: string;
};

export async function apiFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.token
        ? { Authorization: `Bearer ${options.token}` }
        : {}),
      ...options.headers,
    },
    cache: "no-store", // important for admin CRUD
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `API error ${res.status} ${res.statusText}: ${text}`
    );
  }

  // Handle empty responses
  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}
